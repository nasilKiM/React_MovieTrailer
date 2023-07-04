import styled from 'styled-components';
import MoviePreviewCard from './components/movieCard';
import MoviePreviewSlider from './components/movieSlider';
import { useEffect, useState } from 'react';
import MainPageSkeleton from 'Pages/Skeleton/page/mainSkeleton';

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	return (
		<div>
			{isLoading ? (
				<MainPageSkeleton />
			) : (
				<Wrapper>
					<MoviePreviewSlider />
					<MoviePreviewCard />
				</Wrapper>
			)}
		</div>
	);
};

export default HomePage;

const Wrapper = styled.div`
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
