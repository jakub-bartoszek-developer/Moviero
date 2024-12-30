import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { PopularMoviesList, Container } from "./styled";
import { Loader } from "../../../components/Loader/Loader";
import { Pagination } from "../../../components/Pagination/Pagination";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";
import {
 fetchPopularMovies,
 selectGenres,
 selectPopularMovies,
 selectRandomPopularMovie,
 selectStatus,
 selectTotalPages,
 setRandomPopularMovie
} from "../../../utils/redux/moviesSlice";
import { MovieTile } from "../../../components/MovieTile/MovieTile";

import { Header } from "../../../components/Header/Header";

export const PopularMovies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectStatus);
 const popularMovies = useSelector(selectPopularMovies);
 const randomPopularMovie = useSelector(selectRandomPopularMovie);
 const totalPages = useSelector(selectTotalPages);
 const genres = useSelector(selectGenres);
 const [currentMovie, setCurrentMovie] = useState(randomPopularMovie);
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(fetchPopularMovies({ page: searchParams.get("page") }));
  }
 }, [searchParams, dispatch]);

 useEffect(() => {
  if (popularMovies.length > 0) {
   dispatch(
    setRandomPopularMovie(popularMovies[Math.floor(Math.random() * 19)])
   );
  }
 }, [dispatch, popularMovies]);

 useEffect(() => {
  if (Object.keys(randomPopularMovie).length > 0) {
   setCurrentMovie(randomPopularMovie);
  }
 }, [randomPopularMovie]);

 switch (status) {
  case "success":
   return (
    <>
     <Header
      currentMovie={currentMovie}
      setCurrentMovie={setCurrentMovie}
      genres={genres}
     />
     <Container ref={containerRef}>
      {popularMovies.length > 0 && (
       <VerticalSection>
        <SectionHeader>Popular movies</SectionHeader>
        <PopularMoviesList>
         {popularMovies.map((movie) => (
          <MovieTile
           genres={genres}
           key={movie.id}
           movie={movie}
          />
         ))}
        </PopularMoviesList>
       </VerticalSection>
      )}
      <Pagination
       containerRef={containerRef}
       searchParams={searchParams}
       setSearchParams={setSearchParams}
       totalPages={totalPages}
      />
     </Container>
    </>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};
