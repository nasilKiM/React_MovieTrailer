import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';
import MovieSlider from './components/Banner';
import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import Preview from './components/Preview';
import styled from 'styled-components';

const HomePage = () => {
	const now = 'Now Playing';
	const top = 'Top Rated';
	const up = 'Up coming';

	const { data: popular } = useQuery(['POPULAR'], () => MovieApi.getPopular(), {
		refetchOnWindowFocus: false,
		retry: 1,
		cacheTime: 1000 * 60 * 60,
	});

	const { data: nowPlaying } = useQuery(
		['NOW_PLAYING'],
		() => MovieApi.getNowPlaying(1),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 60 * 60,
		},
	);

	const { data: topRated } = useQuery(
		['TOP_RATED'],
		() => MovieApi.getTopRated(1),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 60 * 60,
		},
	);

	const { data: upComing } = useQuery(
		['UP_COMING'],
		() => MovieApi.getUpComing(1),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 60 * 60,
		},
	);

	return (
		<Wrapper>
			{popular && <MovieSlider data={popular} />}
			{nowPlaying && <Preview data={nowPlaying} word={now} />}
			{topRated && <Preview data={topRated} word={top} />}
			{upComing && <Preview data={upComing} word={up} />}
			<ScrollUpBtn />
		</Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	background-color: black;
	min-width: 768px;
`;
