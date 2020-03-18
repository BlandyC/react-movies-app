import React, { useEffect, useState } from 'react';

import DropDownTv from '../layout/DropDownTv';
import TVItem from './TVItem';
import { getTVs } from '../../services/api';

export default function TVList() {
  const [category, setCategory] = useState('airing_today');
  const [tvs, setTVs] = useState([]);

  useEffect(() => {
    if (!category) return;

    getTVs(category).then(result => {
      if (result) {
        setTVs(result);
      }
    });
  }, [category])

  return (
    <>
      <DropDownTv category={category} setCategory={setCategory} />
      {
        tvs.map((movie, index) => 
          <TVItem key={index} data={movie} />
        )
      }
    </>
  );
}