import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { QUERY_KEY } from 'consts/query-key';

const useInfiniteTopRated = () => {
	const res = useInfiniteQuery(
		[QUERY_KEY.INFINITE_TOPRATED],
		({ pageParam = 1 }) => MovieApi.getTopRated(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				return lastPage.data.page + 1;
			},
		},
	);

	return res;
};

export default useInfiniteTopRated;
