import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';
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
	searchResults && console.log(searchResults);

	return (
		<Wrapper>
			<Container>
				{isLoading && <SearchSkeleton />}
				{isFetchingNextPage && <SearchSkeleton />}
				{searchResults && searchResults.pages[0].data.results.length === 0 ? (
					<span>No result of "{word}"</span>
				) : (
					<span>Search results of "{word}"</span>
				)}

				{searchResults &&
					searchResults.pages.map(
						page =>
							page &&
							page.data.results.map(movie => (
								<SearchedMovies key={movie.id} movie={movie} />
							)),
					)}
				<div ref={handleScroll}></div>
				<ScrollUpBtn />
			</Container>
		</Wrapper>
	);
}

export default SearchPage;

const Wrapper = styled.div`
	background-color: black;
`;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	background-color: black;
	padding: 20px 50px;
	> span {
		color: white;
		font-size: 30px;
	}
`;
