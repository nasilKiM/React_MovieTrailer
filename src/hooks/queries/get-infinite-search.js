import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';

const useInfiniteSearch = word => {
	const {
		data: searchResults,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		isLoading,
	} = useInfiniteQuery(
		['INFINITE_SEARCH'],
		({ pageParam = 1 }) => MovieApi.getSearch(word, pageParam),
		{
			onError: () => console.log('에러'),
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.data.page < lastPage.data.total_pages) {
					return lastPage.data.page + 1;
				} else {
					return undefined;
				}
			},
			onSuccess: () => {},
		},
	);
	return {
		isLoading,
		searchResults,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	};
};

export default useInfiniteSearch;
