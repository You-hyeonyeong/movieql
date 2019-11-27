//open API 불러와서 
import fetch from "node-fetch";
const API_URL = "https://yts.lt/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {

  console.log(limit, rating)
  let REQUEST_URL = API_URL;
  if(limit > 0) {
    REQUEST_URL += `limit=${limit}`;
    console.log(REQUEST_URL)
  }
  if(rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
    console.log(REQUEST_URL)
  }

  return fetch(`${REQUEST_URL}`)
  .then(res => res.json())
  .then(json => json.data.movies)

}

// 테스트 해본 코드
// let movies = [
//     {
//       id : 0,
//       name: 'aaa',
//       score: 23
//     },
//     {
//       id : 1,
//       name: 'bbb',
//       score: 15
//     },
//     {
//       id : 2,
//       name: 'ccc',
//       score: 46
//     }
//   ];

// export const getMovies = () => movies;

// export const getById = id => {
//   const filterdMovies = movies.filter(movie => id === movie.id)
//   return filterdMovies[0]
// }

// export const deleteMovies = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id)
//   console.log("movies " + movies.length)
//   console.log("cleandemovie " + cleanedMovies.length)
//   if(movies.length + 1> cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else { 
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id : `${ movies.length }`,
//     name,
//     score
//   };
//   movies.push(newMovie);
//   return newMovie
// }
  