import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
// import NowPlayApi from 'Apis/nowPlayApi';
// import { queryConfig } from '../@config';

const useGetNowPlay = params => {
	const { data, error, status, isLoading } = useQuery(
		['NOW_PLAY'],
		() => MovieApi.getNowPlaying(params),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 10 * 50,
			onSuccess: res => {
				console.log('★★★★★★', res);
			},
		},
	);
	console.log(isLoading, data);
	return { data, error, status, isLoading };
};

export default useGetNowPlay;

// export function useGetTopRated(params) {
// 	const { data, error, status, isLoading } = useQuery(
// 		'TOP_RATED',
// 		() => MovieApi.getTopRated(params),
// 		{ ...queryConfig },
// 	);
// 	console.log(1, data);
// 	return { data, error, status, isLoading };
// }

// export function useGetUpComing(params) {
// 	const { data, error, status, isLoading } = useQuery(
// 		'UP_COMING',
// 		() => MovieApi.getUpComing(params),
// 		{ ...queryConfig },
// 	);
// 	console.log(1, data);
// 	return { data, error, status, isLoading };
// }
