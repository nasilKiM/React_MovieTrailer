import LayOut from 'components/Layout';
import MainTrailer from 'Pages/Home/MainTrailer/maintrailer';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayOut />,
		children: [
			{ path: '/', element: <MainTrailer /> },
			// {
			// 	path: '/issue/:number',
			// 	element: <DetailPage />,
			// },
		],
	},
]);

export default router;
