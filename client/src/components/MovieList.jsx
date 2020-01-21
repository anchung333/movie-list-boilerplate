import React from 'react';
import Movie from './Movie'

const MovieList = (props) => {
  return (
    <div className='movielist'>
    {props.movies.map((movie, idx) => (
      <Movie movie={movie} key={idx} index={idx} addToWatched={props.addToWatched.bind(this)}/>
    ))}
    </div>
  )
};

export default MovieList;