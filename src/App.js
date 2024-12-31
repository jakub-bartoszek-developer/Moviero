import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import Movie from "./pages/Movie/Movie";
import People from "./pages/People/People";
import Person from "./pages/Person/Person";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
 return (
  <HashRouter future={{
   v7_startTransition: true,
   v7_relativeSplatPath: true
  }}>
   <Navigation />
   <Routes>
    <Route path={toMovies()} element={<Movies />} />
    <Route path={toPeople()} element={<People />} />
    <Route path={toMovie()} element={<Movie />} />
    <Route path={toPerson()} element={<Person />} />
    <Route path="/" element={<Navigate to="/movies" />} />
   </Routes>
  </HashRouter>
 );
}

export default App;
