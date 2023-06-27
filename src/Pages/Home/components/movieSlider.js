import MovieSlider from './Banner/Slider';
import { usePopular } from 'hooks/queries/get-movie-infos';
import styled from 'styled-components';

const MoviePreviewSlider = () => {
	const { popular } = usePopular();

	return <Wrapper>{popular && <MovieSlider data={popular} />}</Wrapper>;
};

export default MoviePreviewSlider;

const Wrapper = styled.div`
	background-color: black;
	padding-bottom: 100px;
	@media (max-width: 700px) {
		padding-bottom: 50px;
	}
	@media (max-width: 900px) {
		padding-bottom: 50px;
	}
`;
