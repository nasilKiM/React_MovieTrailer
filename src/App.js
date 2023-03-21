import { RouterProvider } from 'react-router-dom';
import router from 'Routes/Routing';
import GlobalStyles from 'Styles/global';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={router} />
		</>
	);
};

export default App;
