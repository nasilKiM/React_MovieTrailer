import LayOut from 'components/Layout';
import MainTrailer from 'Pages/Home/components/MainTrailer/maintrailer';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayOut />,
		children: [{ path: '/', element: <MainTrailer /> }],
	},
]);

export default router;
