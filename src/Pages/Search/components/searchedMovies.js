import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter } from 'Styles/common';

function SearchedMovies({ key, movie }) {
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';
	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`/detail/${movie.id}`);
	};

	return (
		<Wrapper onClick={goDetail}>
			<Poster>
				<img
					src={IMG_BASE_URL + movie.poster_path}
					alt="포스터"
					width="100%"
					height="100%"
				></img>
			</Poster>
			<Info>
				<Top>
					<Title>{movie.title}</Title>
					<span>
						{' '}
						{movie.vote_average === 0
							? `${movie.release_date} 개봉 예정입니다.`
							: `⭐${movie.vote_average.toFixed(1)}`}
					</span>
				</Top>
				<Preview> {movie.overview}</Preview>
			</Info>
		</Wrapper>
	);
}
export default SearchedMovies;

const Wrapper = styled.div`
	color: white;
	background-color: black;
	height: 40vh;
	list-style: none;
	margin: 0;
	padding: 50px;
	border: 1px double grey;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	margin-top: 30px;
`;

const Poster = styled.div`
	width: 230px;
	height: 105%;
`;

const Info = styled.div`
	width: 80%;
	height: 100%;
	padding: 50px;
`;
const Top = styled.div`
	${flexAlignCenter}
	margin-bottom: 30px;
`;
const Title = styled.div`
	height: 100%;
	font-weight: 900;
	font-size: 30px;
	margin-right: 20px;
`;

const Preview = styled.div`
	width: 100%;
	font-size: 20px;
	line-height: 30px;
	font-weight: lighter;
`;
