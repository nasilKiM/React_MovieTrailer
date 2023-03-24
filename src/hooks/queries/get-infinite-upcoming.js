import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';

const useInfiniteUpComing = () => {
	const res = useInfiniteQuery(
		['INFINITE_UPCOMING'],
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
