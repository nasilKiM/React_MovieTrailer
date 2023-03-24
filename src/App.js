import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShowSkeleton from 'components/Skeleton/ShowSkeleton';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from 'Routes/routing';

import GlobalStyles from 'Styles/global';

function App() {
	const queryClient = new QueryClient();

	return (
		<Suspense fallback={ShowSkeleton}>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<GlobalStyles />
					<RouterProvider router={router} />
				</RecoilRoot>
			</QueryClientProvider>
		</Suspense>
	);
}

export default App;
