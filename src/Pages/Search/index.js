import styled from 'styled-components';
import SearchSkeleton from '../Skeleton/page/searchSkeleton';
import SearchedMovies from './components/searchedMovies';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useInfiniteSearch } from 'hooks/queries/get-infinite-movieList';
import SearchBar from 'components/Layout/Header/search';

function SearchPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const [ref, inView] = useInView();
	const word = searchParams.get('word');
	const { searchResults, isLoading, isFetchingNextPage, fetchNextPage } =
		useInfiniteSearch(word);

	const blank = new Array(3).fill(0);

	useEffect(() => {
		if (!inView) {
			return;
		}
		fetchNextPage();
	}, [inView]);

	return (
		<Wrapper>
			<Container>
				<SearchContainer>
					<SearchBar />
				</SearchContainer>
				{searchResults && searchResults.pages[0].data.results.length === 0 ? (
					<span>No result of "{word}"</span>
				) : (
					<span>Search results of "{word}"</span>
				)}

				{!isLoading
					? searchResults &&
					  searchResults.pages.map(
							page =>
								page &&
								page.data.results.map(movie => (
									<SearchedMovies key={movie.id} movie={movie} />
								)),
					  )
					: blank.map(() => <SearchSkeleton />)}
				{isFetchingNextPage ? blank.map(() => <SearchSkeleton />) : ''}
				<div ref={ref}></div>
			</Container>
		</Wrapper>
	);
}

export default SearchPage;

const Wrapper = styled.div`
	background-color: black;
`;

const Container = styled.div`
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
		padding: 20px 0;
	}
	@media (max-width: 1100px) {
		width: 90%;
		padding: 20px 0;
	}
	margin: 0 auto;
	background-color: black;
	padding: 20px 50px;
	> span {
		color: white;
		font-size: 25px;
	}
`;

const SearchContainer = styled.div`
	padding: 30px 0;
`;
