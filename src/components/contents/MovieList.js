import React, { useEffect, useState } from 'react';

import DropDownMovies from '../layout/DropDownMovies';
import MovieItem from './MovieItem';
import { getMovies } from '../../services/api';

export default function MovieList() {
  const [category, setCategory] = useState('now_playing');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!category) return;

    getMovies(category).then(result => {
      if (result) {
        setMovies(result);
      }
    });
  }, [category])

  return (
    <>
      <DropDownMovies category={category} setCategory={setCategory} />
      {
        movies.map((movie, index) => 
          <MovieItem key={index} data={movie} />
        )
      }
    </>
  );
}