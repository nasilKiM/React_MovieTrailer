
import LayOut from 'components/Layout';
import SearchPage from 'Pages/Search';
import DetailPage from '../Pages/DetailPage';
import HomePage from '../Pages/Home';
import MainTrailer from 'Pages/Home/MainTrailer/maintrailer';
const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
	{
		path: '/',

		element: <LayOut />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: '/issues',
				element: <HomePage />,
			},
			{
				path: '/detail/:id',
				element: <DetailPage />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},

		],
	},
]);

export default router;
