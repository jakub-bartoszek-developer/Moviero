import axios from "axios";

export const getGenres = async () => {
 const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', {
  headers: {
   accept: 'application/json',
   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTNkYzA0NDk2MjU0OTgwZDAxZGE2ZjEyZWNkOGUxZCIsInN1YiI6IjY1NGJiZGEyNDFhNTYxMzM2YzVlZDg2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jjbm7YAkE1x0vuKowvjXJFiE28sDgW1TB_diyZmPKVQ'
  }
 });
 
 return response.data.genres;
};