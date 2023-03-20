import Layout from 'components/Layout';
import SearchPage from 'Pages/Search';
import DetailPage from '../Pages/Detail';
import HomePage from '../Pages/Home';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
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
