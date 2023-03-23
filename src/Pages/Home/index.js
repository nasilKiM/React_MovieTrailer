import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';
// import useGetNowPlay from 'hooks/queries/nowPlay/get-nowplay';
import Preview from './components/Preview';

const HomePage = () => {
	const nowPlaying = 'Now Playing';
	const topRated = 'Top Rated';
	const upComing = 'Up Coming';

	// const {data} = useGetNowPlay(1);
	// console.log('★★★★★★★★★★★★',data);
	return (
		<>
			<Preview />
			{/* <Preview txt={topRated} /> */}
			{/* <Preview txt={upComing} /> */}
			<ScrollUpBtn />
		</>
	);
};

export default HomePage;
