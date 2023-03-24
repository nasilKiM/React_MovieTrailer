import LayOut from 'components/Layout';
import DetailPage from 'Pages/DetailPage/detailInfo';
import SearchPage from 'Pages/Search';
import Temp from 'Pages/temp/temp';
// import DetailPage from '../Pages/DetailPage';
import HomePage from '../Pages/Home';
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
				path: '/temp',
				element: <Temp />,
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
