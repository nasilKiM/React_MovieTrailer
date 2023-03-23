import ListHeader from 'components/ListHeader/listheader';
import NowPreview from './NowPreview/nowpreview';

const NowPlaying = () => {
	return (
		<>
			<ListHeader></ListHeader>
			{/* {dummy.results.map(item => {
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
			})} */}
			<NowPreview />
		</>
	);
};

export default NowPlaying;
