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

	return (
		<BackGround>
			<Wrapper>
				<SearchSkeleton />
				{isLoading && <SearchSkeleton />}
				{isFetchingNextPage && <SearchSkeleton />}
				<SearchWord>
					<h1>Search "{word}"</h1>
				</SearchWord>
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
			<ScrollUpBtn />
		</BackGround>
	);
}

export default SearchPage;

const BackGround = styled.div`
	color: white;
	background-color: black;
`;

const Wrapper = styled.div`
	border: 2px solid cornflowerblue;
	margin: 0 15%;
`;

const SearchWord = styled.div`
	height: 10vh;
	display: flex;
	align-items: center;
	font-weight: 900;
	font-size: 5vh;
	padding-left: 5%;
`;
