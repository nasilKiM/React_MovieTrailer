import { Axios } from './@core';

const MOVIE_PATH = 'movie';
const SEARCH_PATH = 'search';

const MovieApi = {
	getNowPlaying(params) {
		return Axios.get(MOVIE_PATH + '/now_playing', {
			params: {
				page: params,
			},
		});
	},

	getTopRated(params) {
		return Axios.get(MOVIE_PATH + '/top_rated', {
			params: {
				page: params,
			},
		});
	},
	getUpComing(params) {
		return Axios.get(MOVIE_PATH + '/upcoming', {
			params: {
				page: params,
			},
		});
	},

	getSearch(searchKey) {
		return Axios.get(SEARCH_PATH + '/' + MOVIE_PATH, {
			params: {
				query: searchKey,
			},
		});
	},

	getDetailInfo(movieId) {
		return Axios.get(MOVIE_PATH + `/${movieId}`);
	},

	getPopular() {
		return Axios.get(MOVIE_PATH + '/popular');
	},
};

export default MovieApi;
