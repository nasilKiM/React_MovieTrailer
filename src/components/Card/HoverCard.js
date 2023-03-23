import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

function HoverMovieCard({ movie }) {
	const [isHover, setIsHover] = useState(false);
	const navigate = useNavigate();
	return (
		<S.Wrapper>
			{!isHover && (
				<S.Container
					onMouseOver={() => setIsHover(true)}
					onMouseOut={() => setIsHover(false)}
				>
					<S.MoviePoster src={IMG_BASE_URL + movie.poster_path} />
				</S.Container>
			)}
			{isHover && (
				<Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none' }}>
					<S.Container
						onMouseOver={() => setIsHover(true)}
						onMouseOut={() => setIsHover(false)}
					>
						<div>
							<S.MovieTitle>{movie.title}</S.MovieTitle>
							<S.Rating>{movie.vote_average}</S.Rating>
						</div>
						<S.OverviewText>{movie.overview}</S.OverviewText>
					</S.Container>
				</Link>
			)}
		</S.Wrapper>
	);
}

export default HoverMovieCard;

const Wrapper = styled.div`
	display: flex;
	width: 300px;
	/* flex-wrap: wrap; */
	/* justify-content: center; */
	/* :hover {
		border: 1px solid red;
	} */
`;

const Container = styled.div`
	width: 300px;
	height: 420px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	position: relative;
	@media (max-width: 768px) {
		width: 120px;
		height: 180px;
	}
	> div {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin-bottom: 20px;
	}
	:hover {
		background-color: black;
		color: white;
		padding: 50px 20px;
	}
`;

const MoviePoster = styled.img`
	width: 100%;
	object-fit: fill;
`;

const MovieTitle = styled.h3`
	font-size: 25px;
	font-weight: bolder;
	margin-bottom: 10px;
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const Rating = styled.span`
	background-color: #f44336;
	color: #fff;
	width: 40px;
	text-align: center;
	padding: 5px;
	border-radius: 5px;
	font-size: 15px;
	font-weight: bold;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

// const MovieOverview = styled.div`
// 	padding: 10px;
// 	@media (max-width: 768px) {
// 		padding: 5px;
// 	}
// `;

// const OverviewTitle = styled.h4`
// 	width: 100%;
// 	margin: 0;
// 	margin-bottom: 10px;
// 	@media (max-width: 768px) {
// 		margin-bottom: 5px;
// 	}
// `;

const OverviewText = styled.span`
	font-size: 20px;
	font-weight: lighter;
	line-height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const S = {
	Wrapper,
	Container,
	MoviePoster,
	MovieTitle,
	Rating,
	// MovieOverview,
	// OverviewTitle,
	OverviewText,
};
