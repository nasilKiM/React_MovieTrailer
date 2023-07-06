import LayOut from 'components/Layout';
import NotFoundPage from 'Pages/NotFound/404';
import DetailPage from 'Pages/DetailPage';
import HomePage from 'Pages/Home';
import NowPlayList from 'Pages/NowPlay';
import SearchPage from 'Pages/Search';
import TopRatedList from 'Pages/TopRated';
import UpComingList from 'Pages/UpComing';
import { createBrowserRouter } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const router = createBrowserRouter([
	{
		element: (
			<div>
				<ScrollToTop />,
				<LayOut />
			</div>
		),
		children: [
			{ path: '/', element: <HomePage /> },

			{
				path: 'movie/now_playing',
				element: <NowPlayList />,
			},
			{
				path: 'movie/upcoming',
				element: <UpComingList />,
			},
			{
				path: 'movie/top_rated',
				element: <TopRatedList />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
			{
				path: '/detail/:id',
				element: <DetailPage />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

export default router;
