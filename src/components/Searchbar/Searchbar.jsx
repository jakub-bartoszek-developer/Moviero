import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchSearchResults,
 selectSearchQuery,
 selectSearchResults,
 setSearchQuery,
 selectCategory,
 selectSearchStatus
} from "../../utils/redux/searchSlice";
import {
 ResultList,
 ResultStatus,
 SearchbarOuterWrapper,
 SearchbarWrapper,
 SearchButton,
 SearchIcon,
 SearchInput
} from "./styled";

import { SearchTile } from "../SearchTile/SearchTile";
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { Error } from "../Error/Error";

const SearchResults = React.memo(({ results, status, switchSearchbar }) => {
 if (status === "error") {
  return <Error />;
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
     key={item.id}
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
 const searchbarResults = useSelector(selectSearchResults);
 const status = useSelector(selectSearchStatus);
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
    fetchSearchResults({
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
  <SearchbarOuterWrapper>
   <SearchbarWrapper
    onSubmit={onFormSubmit}
    ref={wrapperRef}
    $isExpanded={isExpanded}
   >
    <SearchButton
     onClick={
      isExpanded && searchQuery.length > 0 ? onFormSubmit : switchSearchbar
     }
    >
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
  </SearchbarOuterWrapper>
 );
};
