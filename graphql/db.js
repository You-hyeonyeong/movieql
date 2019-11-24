let movies = [
    {
      id : 0,
      name: 'aaa',
      score: 23
    },
    {
      id : 1,
      name: 'bbb',
      score: 15
    },
    {
      id : 2,
      name: 'ccc',
      score: 46
    }
  ];

export const getMovies = () => movies;

export const getById = id => {
  const filterdMovies = movies.filter(movie => id === movie.id)
  return filterdMovies[0]
}

export const deleteMovies = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id)
  console.log("movieid " + movie.id)
  console.log("movie " + movies.length)
  console.log("cleandemovie " + cleanedMovies.length)
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else { 
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id : `${ movies.length }`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie
}
  