import React from 'react';
import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

function MovieCard({ title, poster_path, vote_average, overview }) {
	return (
		<S.Wrapper>
			<S.Container>
				<S.MoviePoster src={IMG_BASE_URL + poster_path} />
				<S.MovieInfo>
					<div>
						<S.Rating>⭐{vote_average}</S.Rating>
						<S.MovieTitle>{title}</S.MovieTitle>
					</div>
				</S.MovieInfo>
			</S.Container>
		</S.Wrapper>
	);
}

export default MovieCard;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Container = styled.div`
	width: 300px;
	height: 450px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	/* position: relative; */
	@media (max-width: 768px) {
		width: 200px;
		height: 350px;
	}
`;

const MoviePoster = styled.img`
	width: 100%;
	height: 75%;
	object-fit: fill;
	@media (max-width: 768px) {
		height: 65%;
	}
`;

const MovieInfo = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 40%;
	background-color: black;
	@media (max-width: 768px) {
		height: 50%;
		padding: 5px;
	}
	& div {
		display: flex;
		flex-direction: column;
		padding: 5px;
	}
`;

const MovieTitle = styled.h3`
	width: 100%;
	font-size: 20px;
	font-weight: lighter;
	color: white;
	margin-top: 10px;
	margin-bottom: 10px;
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const Rating = styled.span`
	/* background-color: #f44336; */
	border-radius: 5px;
	width: 100%;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	margin-top: 10px;
	margin-bottom: 10px;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const S = {
	Wrapper,
	Container,
	MoviePoster,
	MovieInfo,
	MovieTitle,
	Rating,
};
