import ListHeader from 'components/ListHeader/listheader';
import MainTrailer from './components/MainTrailer/maintrailer';
import NowPlaying from './components/NowPlaying/nowplaying';
import TopRated from './components/TopRated/toprated';
import UpComing from './components/UpComing/upcoming';

const HomePage = () => {
	return (
		<>
			<MainTrailer />
			<ListHeader></ListHeader>
			<NowPlaying />
			<ListHeader></ListHeader>
			<TopRated />
			<ListHeader></ListHeader>
			<UpComing />
		</>
	);
};

export default HomePage;
