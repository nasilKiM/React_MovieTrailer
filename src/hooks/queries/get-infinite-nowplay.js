import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';

const useInfiniteNowPlay = () => {
	const res = useInfiniteQuery(
		['INFINITE_NOW_PLAY'],
		({ pageParam = 1 }) => MovieApi.getNowPlaying(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				return lastPage.data.page + 1;
			},
		},
	);

	return res;
};

export default useInfiniteNowPlay;
