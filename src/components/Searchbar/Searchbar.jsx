import React, { useEffect, useRef, useState, useCallback } from "react";
import {
 Container,
 ResultList,
 ResultStatus,
 SearchbarWrapper,
 SearchButton,
 SearchIcon,
 SearchInput
} from "./styled";
import {
 fetchSearchbarResults,
 selectSearchQuery,
 selectSearchbarResults,
 setSearchQuery,
 selectCategory,
 selectSearchbarStatus
} from "../../utils/redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { SearchTile } from "../SearchTile/SearchTile";
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const SearchResults = React.memo(({ results, status, switchSearchbar }) => {
 if (status === "error") {
  return <ResultStatus>Error</ResultStatus>;
 }

 if (status === "loading") {
  return (
   <ResultStatus>
    <Loader />
   </ResultStatus>
  );
 }

 if (status === "success") {
  return results.length ? (
   results.map((item) => (
    <SearchTile
     switchSearchbar={switchSearchbar}
     key={nanoid()}
     item={item}
    />
   ))
  ) : (
   <ResultStatus>No results...</ResultStatus>
  );
 }

 return null;
});

export const Searchbar = () => {
 const searchQuery = useSelector(selectSearchQuery);
 const searchbarResults = useSelector(selectSearchbarResults);
 const status = useSelector(selectSearchbarStatus);
 const category = useSelector(selectCategory);

 const [isExpanded, setIsExpanded] = useState(false);
 const inputRef = useRef(null);
 const wrapperRef = useRef(null);

 const navigate = useNavigate();
 const dispatch = useDispatch();

 const handleOutsideClick = useCallback(
  (e) => {
   if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
    setIsExpanded(false);
    dispatch(setSearchQuery(""));
   }
  },
  [dispatch]
 );

 useEffect(() => {
  document.addEventListener("mousedown", handleOutsideClick);
  return () => {
   document.removeEventListener("mousedown", handleOutsideClick);
  };
 }, [handleOutsideClick]);

 useEffect(() => {
  if (searchQuery !== "") {
   dispatch(
    fetchSearchbarResults({
     searchQuery: searchQuery,
     page: 1,
     category: category
    })
   );
  }
 }, [dispatch, category, searchQuery]);

 const switchSearchbar = useCallback(() => {
  setIsExpanded((prev) => !prev);
  inputRef.current?.focus();
 }, []);

 const onFormSubmit = useCallback(
  (e) => {
   e.preventDefault();
   navigate(
    `/${
     category === "movie" ? "movies" : "people"
    }?search=${searchQuery}&page=1`
   );
   switchSearchbar();
  },
  [navigate, category, searchQuery, switchSearchbar]
 );

 return (
  <Container>
   <SearchbarWrapper
    onSubmit={onFormSubmit}
    ref={wrapperRef}
    $isExpanded={isExpanded}
   >
    <SearchButton onClick={switchSearchbar}>
     <SearchIcon />
    </SearchButton>
    <SearchInput
     value={searchQuery}
     onChange={(e) => dispatch(setSearchQuery(e.target.value))}
     ref={inputRef}
     placeholder={`Search for ${category === "movie" ? "movies" : "people"}...`}
    />
    {isExpanded && searchQuery && (
     <ResultList>
      <SearchResults
       results={searchbarResults}
       status={status}
       switchSearchbar={switchSearchbar}
      />
     </ResultList>
    )}
   </SearchbarWrapper>
  </Container>
 );
};
