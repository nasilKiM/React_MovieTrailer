import MovieCard from 'components/Card/Card';
import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';
import { useInfiniteUpComing } from 'hooks/queries/get-infinite-movieList';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter } from 'Styles/common';

const UpComingList = () => {
	const res = useInfiniteUpComing();
	const { data } = res;
	const resData = data?.pages[0].data.results;

	const [ref, inView] = useInView();

	useEffect(() => {
		console.log(inView);
		if (!inView) return;
		res.fetchNextPage();
	}, [inView]);

	return (
		<S.Wrapper>
			<S.Container>
				<S.Title>UP COMING LIST</S.Title>
				<S.Card>
					{data && resData.map(page => <MovieCard movie={page} />)}
				</S.Card>
			</S.Container>

			<ScrollUpBtn />

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
	width: 80%;
	margin: 0 auto;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 30px;
`;

const Card = styled.div`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	flex-basis: 0px;
`;

const Box = styled.div`
	flex-wrap: wrap;
	${flexAlignCenter}
`;

const Info = styled.div`
	${flexAlignCenter}
	padding: 20px;
	justify-content: space-between;

	& > span {
		margin-left: 10px;
		font-size: 14px;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

const S = {
	Wrapper,
	Container,
	Title,
	Card,
	Info,
	Box,
	StyledLink,
};
