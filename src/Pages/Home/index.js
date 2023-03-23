import MainTrailer from './components/MainTrailer/maintrailer';
import NowPlaying from './components/NowPlaying/nowplaying';
import TopRated from './components/TopRated/toprated';
import UpComing from './components/UpComing/upcoming';

const HomePage = () => {
	console.log(process.env.REACT_APP_BASEURL);
	return (
		<>
			<MainTrailer />
			<NowPlaying />
			<TopRated />
			<UpComing />
		</>
	);
};

export default HomePage;
