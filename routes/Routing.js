import Layout from 'components/Layout';
import DetailPage from 'pages/DetailPage';
import HomePage from 'pages/Home';

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
		],
	},
]);

export default router;
