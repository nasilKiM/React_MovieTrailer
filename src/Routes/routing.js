const { default: LayOut } = require('components/Layout');
const { default: HomePage } = require('Pages/Home');
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
		],
	},
]);

export default router;
