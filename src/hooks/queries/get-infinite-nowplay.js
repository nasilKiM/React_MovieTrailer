import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { QUERY_KEY } from 'consts/query-key';

const useInfiniteNowPlay = () => {
	const res = useInfiniteQuery(
		[QUERY_KEY.INFINITE_NOW_PLAY],
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
