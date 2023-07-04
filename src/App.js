import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingPage from 'components/Loading/Loading';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'Routes/routing';
import GlobalStyles from 'Styles/global';

function App() {
	const queryClient = new QueryClient();
	return (
		<Suspense fallback={<LoadingPage />}>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Suspense>
	);
}

export default App;
