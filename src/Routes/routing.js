import LayOut from 'components/Layout';
import HomePage from 'Pages/Home';
// import NowPlaying from 'Pages/Home/components/NowPlaying/nowplaying';
// import TopRated from 'Pages/Home/components/TopRated/toprated';
// import UpComing from 'Pages/Home/components/UpComing/upcoming';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		element: <LayOut />,
		children: [
			{ path: '/', element: <HomePage /> },

			// {
			// 	path: '/movie/:now_playing',
			// 	element: <NowPlaying />,
			// },
			// {
			// 	path: '/movie/:upcoming',
			// 	element: <UpComing />,
			// },
			// {
			// 	path: '/movie/:top_rated',
			// 	element: <TopRated />,
			// },
		],
	},
]);

export default router;
