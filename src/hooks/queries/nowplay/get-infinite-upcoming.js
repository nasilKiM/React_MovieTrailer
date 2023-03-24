import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { QUERY_KEY } from 'consts/query-key';

const useInfiniteUpComing = () => {
	const res = useInfiniteQuery(
		[QUERY_KEY.INFINITE_UPCOMING],
		({ pageParam = 1 }) => MovieApi.getUpComing(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				return lastPage.data.page + 1;
			},
		},
	);

	return res;
};

export default useInfiniteUpComing;
