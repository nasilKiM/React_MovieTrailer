import { Axios } from './@core';

const APIs = {
	getNowPlaying(params) {
		return Axios.get('/now_playing', {
			params: {
				page: params,
			},
		});
	},

	getTopRated(params) {
		return Axios.get('/top_rated', {
			params: {
				page: params,
			},
		});
	},
	getUpComing(params) {
		return Axios.get('/upcoming', {
			params: {
				page: params,
			},
		});
	},
};

export default APIs;
