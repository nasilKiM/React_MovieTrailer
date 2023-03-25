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
import ShowSkeleton from 'components/Skeleton/ShowSkeleton';
import { Skeleton } from '@mui/material';

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
			{isLoading && (
				<Skeleton variant="rectangular" width={'1200px'} height={'500px'} />
			)}
			<Wrapper>
				{popular ? <MovieSlider data={popular} /> : <ShowSkeleton />}
				{nowPlaying && <Preview data={nowPlaying} word={now} nav={nowTo} />}
				{topRated && <Preview data={topRated} word={top} nav={topTo} />}
				{popIsLoading ? (
					<Skeleton variant="rectangular" width={'1200px'} height={'500px'} />
				) : (
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

const SkeletonUI = styled(Skeleton)`
	width: 80%;
	height: 500px;
`;
