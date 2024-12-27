import { useEffect, useRef, useState } from "react";
import {
 Container,
 Input,
 ResultList,
 ResultStatus,
 SearchIcon,
 SearchIconWrapper,
 Wrapper
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

export const Searchbar = () => {
 const searchQuery = useSelector(selectSearchQuery);
 const searchbarResults = useSelector(selectSearchbarResults);
 const status = useSelector(selectSearchbarStatus);
 const [isExpanded, setIsExpanded] = useState(false);
 const inputRef = useRef(null);
 const wrapperRef = useRef(null);
 const category = useSelector(selectCategory);

 const navigate = useNavigate();
 const dispatch = useDispatch();

 useEffect(() => {
  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
   document.removeEventListener("mousedown", handleOutsideClick);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

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

 const handleOutsideClick = (e) => {
  if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
   setIsExpanded(false);
   dispatch(setSearchQuery(""));
  }
 };

 const switchSearchbar = () => {
  setIsExpanded(!isExpanded);
  inputRef.current.focus();
 };

 const onFormSubmit = (e) => {
  navigate(`/${category === "movie" ? "movies" : "people"}?search=${searchQuery}&page=1`);
  switchSearchbar();
 };

 return (
  <Container>
   <Wrapper
    onSubmit={(e) => onFormSubmit(e)}
    ref={wrapperRef}
    $isExpanded={isExpanded}
   >
    <SearchIconWrapper onClick={switchSearchbar}>
     <SearchIcon />
    </SearchIconWrapper>
    <Input
     value={searchQuery}
     onChange={(e) => dispatch(setSearchQuery(e.target.value))}
     ref={inputRef}
     placeholder={`Search for ${category === "movie" ? "movies" : "people"}...`}
    />
    {isExpanded && searchQuery && (
     <ResultList>
      {status === "error" && <ResultStatus>Error</ResultStatus>}
      {status === "loading" && (
       <ResultStatus>
        <Loader />
       </ResultStatus>
      )}
      {status === "success" && (
       <>
        {searchbarResults.length ? (
         searchbarResults.map((data) => (
          <SearchTile
           switchSearchbar={switchSearchbar}
           key={nanoid()}
           data={data}
          />
         ))
        ) : (
         <ResultStatus>No results...</ResultStatus>
        )}
       </>
      )}
     </ResultList>
    )}
   </Wrapper>
  </Container>
 );
};
