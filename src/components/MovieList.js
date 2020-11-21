import React from 'react';

const MovieList = (props) => {
  return (
    <React.Fragment>
      {props.movies.map((movie, index) => (
      <div>
        <img src={movie.Poster} alt='movie'></img>
      </div>
      ))}
    </React.Fragment>
  );
};

export default MovieList;
