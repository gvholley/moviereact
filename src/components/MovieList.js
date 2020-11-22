import React from 'react';

const MovieList = (props) => {
  return (
    <React.Fragment>
      {props.movies.map((movie, index) => (
      <div className="d-flex justify-content-start m-3">
        <img src={movie.Poster} alt='movie' />
      </div>
      ))}
    </React.Fragment>
  );
};

export default MovieList;
