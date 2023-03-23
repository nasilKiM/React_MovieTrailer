import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import HoverMovieCard from 'components/Card/HoverCard';

import styled from 'styled-components';
import { flexSpaceBetween } from 'Styles/common';

const Preview = () => {
	// const temp = APIs.getNowPlaying(5).then(res => console.log(res.data));

	const { data } = useQuery(
		['get_now_playing_movies'],
		() => MovieApi.getTopRated(5),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 60 * 60,
			onSuccess: res => {
				console.log(res);
			},
			onError: () => {},
		},
	);

	data && console.log('data', data);

	const top4 = data && data.data.results.splice(0, 4);
	console.log('splice', top4);

	return (
		<S.Wrapper>
			<S.Bar>
				<span>Now Playing</span>
				<button>more &gt;</button>
			</S.Bar>
			<S.Cards>
				{top4 && top4.map(item => <HoverMovieCard movie={item} />)}
			</S.Cards>
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const Bar = styled.div`
	width: 100%;
	${flexSpaceBetween}
	padding: 5px 20px;
	> button {
		border: none;
		padding: 10px 15px;
		border-radius: 10px;
	}
`;

const Cards = styled.div`
	${flexSpaceBetween}
	border: 1px solid yellow;
`;

const S = {
	Wrapper,
	Bar,
	Cards,
};
