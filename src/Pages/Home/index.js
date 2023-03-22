import MainTrailer from './components/MainTrailer/maintrailer';
import NowPlaying from './components/NowPlaying/nowplaying';
import Preview from './components/Preview';
import TopRated from './components/TopRated/toprated';
import UpComing from './components/UpComing/upcoming';

const HomePage = () => {
	return (
		<>
			<Preview />
			<MainTrailer />
			<NowPlaying />
			<TopRated />
			<UpComing />
		</>
	);
};

export default HomePage;
