import { API_KEY, BASE_URL } from '../config/api_config';

export const getMovies = async category => {
	const api_call = await fetch(
		`${BASE_URL}/movie/${category}?api_key=${API_KEY}`
	);
	const data = await api_call.json();
	const movies = data.results;
	console.log('[GET Movies]', movies);

	return movies;
};

export const getTVs = async category => {
	const api_call = await fetch(
		`${BASE_URL}/tv/${category}?api_key=${API_KEY}`
	);
	const data = await api_call.json();
  const tvs = data.results;
	console.log('[GET TVs]', tvs);

	return tvs;
};

export const search = async (keyword, type) => {
	const api_call = await fetch(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${keyword}`);
	const data = await api_call.json();
  const movies = data.results;
  console.log('[SEARCH]', movies);

	return movies;
};
