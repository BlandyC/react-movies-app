import React, { useEffect, useState } from 'react';

import MovieItem from './MovieItem';
import TVItem from './TVItem';
import { search } from '../../services/api';

export default function SearchList({ keyword, searchType }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!keyword) return;

    search(keyword, searchType).then(result => {
      if (result) {
        setMovies(result);
      }
    });
  }, [keyword, searchType])

  if (!keyword) {
    return <h1>Please enter a search</h1>;
  }

  if (movies.length === 0) {
    return <h1>There is no search result</h1>;
  }

  return (
    <>
      {
        movies.map((movie, index) => {
          if (searchType === 'tv') {
            return <TVItem key={index} data={movie} />;
          }
          return <MovieItem key={index} data={movie} />;
        })
      }
    </>
  );
}