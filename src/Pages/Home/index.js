import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';
import styled from 'styled-components';
import MovieSlider from './components/Banner/Slider';
import Preview from './components/Preview/preview';
import {
	useNowPlaying,
	usePopular,
	useTopRated,
	useUpComing,
} from 'hooks/queries/now-playing';

const HomePage = () => {
	const now = 'Now Playing';
	const top = 'Top Rated';
	const up = 'Up coming';
	const nowTo = 'now_playing';
	const topTo = 'top_rated';
	const upTo = 'upcoming';

	const { popular, isLoading: popIsLoading } = usePopular();
	const { nowPlaying } = useNowPlaying(1);
	const { topRated } = useTopRated(1);
	const { upComing, isLoading } = useUpComing(1);

	return (
		<>
			<Wrapper>
				{popular && <MovieSlider data={popular} />}
				{nowPlaying && <Preview data={nowPlaying} word={now} nav={nowTo} />}
				{topRated && <Preview data={topRated} word={top} nav={topTo} />}

				{upComing && (
					<Preview data={upComing} word={up} nav={upTo} isLoading={isLoading} />
				)}

				<ScrollUpBtn />
			</Wrapper>
		</>
	);
};

export default HomePage;

const Wrapper = styled.div`
	background-color: black;
	min-width: 768px;
`;
