import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from 'Routes/routing';

import GlobalStyles from 'Styles/global';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<GlobalStyles />
				<RouterProvider router={router} />
			</RecoilRoot>
		</QueryClientProvider>
	);
}

export default App;
