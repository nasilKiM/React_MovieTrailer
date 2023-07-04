import MovieCard from 'components/Card/Card';
import { useInfiniteUpComing } from 'hooks/queries/get-infinite-movieList';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styled from 'styled-components';

const UpComingList = () => {
	const res = useInfiniteUpComing();
	const { data } = res;
	const [ref, inView] = useInView();

	useEffect(() => {
		if (!inView) return;
		res.fetchNextPage();
	}, [inView]);

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<S.Wrapper>
			<S.Container>
				<S.Title>UP COMING LIST</S.Title>
				<S.Card>
					{data?.pages.map(page => {
						return page?.data.results.map(page => <MovieCard movie={page} />);
					})}
				</S.Card>
			</S.Container>

			<div ref={ref}></div>
		</S.Wrapper>
	);
};

export default UpComingList;

const Wrapper = styled.div`
	width: 100%;
	padding: 50px 0;
	background-color: black;
	color: white;
`;

const Container = styled.div`
	width: 90%;
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
		padding: 20px 0;
	}
	@media (max-width: 900px) {
		width: 90%;
		padding: 20px 0;
	}
	margin: 0 auto;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 30px;
	padding-bottom: 30px;
`;

const Card = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-basis: 0px;
`;

const S = {
	Wrapper,
	Container,
	Title,
	Card,
};
