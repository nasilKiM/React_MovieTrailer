import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SearchedMovies({ key, movie }) {
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';
	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`/detail/${movie.id}`);
	};

	let score;
	if (movie.vote_average !== 0) {
		score = `⭐${movie.vote_average.toFixed(1)}`;
	} else {
		const releaseDate = new Date(movie.release_date);
		const currentDate = new Date();
		if (releaseDate > currentDate) {
			score = `It will be released on ${movie.release_date} .`;
		} else {
			score = 'Sorry, there are not enough rating data yet.';
		}
	}

	return (
		<Wrapper onClick={goDetail}>
			<Poster>
				{movie.poster_path ? (
					<img
						src={IMG_BASE_URL + movie.poster_path}
						alt="포스터"
						width="100%"
						height="100%"
					/>
				) : (
					<img
						src="/Assets/backdrop.png"
						alt="포스터 없음"
						width="100%"
						height="100%"
					/>
				)}
			</Poster>
			<Info>
				<Top>
					<Title>{movie.title}</Title>
					<Score>{score}</Score>
				</Top>
				<Preview> {movie.overview}</Preview>
			</Info>
		</Wrapper>
	);
}
export default SearchedMovies;

const Wrapper = styled.div`
	background-color: black;
	height: 40vh;
	list-style: none;
	margin: 0;
	padding: 0;
	border: 5px solid salmon;
	display: flex;
	justify-content: center;
	margin-bottom: 10vh;
`;

const Poster = styled.div`
	width: 17%;
	height: 100%;
`;

const Info = styled.div`
	width: 83%;
	height: 100%;
	//border: 3px solid yellowgreen;
	display: flex;
	flex-direction: column;
`;
const Top = styled.div`
	height: 50%;
	//border: 3px solid yellowgreen;
	display: flex;
	flex-direction: row;
`;
const Title = styled.div`
	width: 40%;
	height: 100%;
	//border: 2px solid hotpink;
	font-weight: 900;
	font-size: large;
	display: flex;
	align-items: center;
	padding-left: 10%;
`;

const Score = styled.div`
	width: 60%;
	height: 100%;
	//border: 2px solid tan;
	display: flex;
	align-items: center;
`;

const Preview = styled.div`
	width: 100%;
	height: 50%;
	padding-left: 5vh;
	display: -webkit-box;
	overflow: hidden;
`;
