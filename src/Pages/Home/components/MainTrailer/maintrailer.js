import MovieCard from 'components/Card/Card';
// import styled from 'styled-components';
import { dummy } from 'tempData';
import MovieSlider from './Slider';

const MainTrailer = () => {
	return (
		<>
			<div>
				<MovieSlider dummy={dummy.results} />
			</div>
			{dummy.results.map(item => {
				return (
					<div>
						<MovieCard
							title={item.title}
							poster_path={item.poster_path}
							vote_average={item.vote_average}
							overview={item.overview}
						/>
					</div>
				);
			})}
		</>
	);
};

export default MainTrailer;

// const Wrapper = styled.div`
// 	background-color: aqua;
// 	display: flex;
// 	flex-wrap: wrap;
// `;

// const S = {
// 	Wrapper,
// };
