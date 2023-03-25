import useInfiniteSearch from 'hooks/queries/get-infinite-search';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovies from './components/searchedMovies';
import SearchSkeleton from './components/searchSkeleton';

function SearchPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);

	const word = searchParams.get('word');
	const {
		searchResults,
		isLoading,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	} = useInfiniteSearch(word);
	/*
	const {
		data: searchResults,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		isLoading,
	} = useInfiniteQuery(
		['searchResults', word],
		({ pageParam = 1 }) => MovieApi.getSearch(word, pageParam),
		{
			onError: () => console.log('에러'),
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.data.page < lastPage.data.total_pages) {
					return { nextPage: lastPage.data.page + 1 };
				} else {
					return undefined;
				}
			},
			onSuccess: () => {
				return { isLoading };
			},
		},
	);
	console.log('>>>>>>>>>>>>>>>>', isLoading);
	*/
	console.log('>>>>>>', isLoading);
	const handleScroll = useCallback(
		node => {
			if (node && !isFetchingNextPage && hasNextPage) {
				const observer = new IntersectionObserver(
					entries => {
						if (entries[0].isIntersecting) {
							fetchNextPage();
						}
					},
					{
						rootMargin: '0px 0px 500px 0px',
					},
				);
				observer.observe(node);
			}
		},
		[hasNextPage, fetchNextPage],
	);

	return (
		<Wrapper>
			{isLoading && <SearchSkeleton />}

			<h1>Search "{word}"</h1>

			{searchResults &&
				searchResults.pages.map(
					page =>
						page &&
						page.data.results.map(movie => (
							<SearchedMovies key={movie.id} movie={movie} />
						)),
				)}
			<div ref={handleScroll}></div>
		</Wrapper>
	);
}

export default SearchPage;

const Wrapper = styled.div`
	border: 2px solid cornflowerblue;
	margin: 0 15%;
	background-color: gray;
`;
