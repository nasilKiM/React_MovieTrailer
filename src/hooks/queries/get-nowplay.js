import { useQuery } from '@tanstack/react-query';
import NowPlayApi from 'Apis/nowPlayApi';

const useGetNowPlay = params => {
	const { data, error, status, isLoading } = useQuery(
		['NOW_PLAY', params],
		() => NowPlayApi.getNowPlay(params),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 60 * 5,
			onSuccess: () => {},
			onError: () => {},
		},
	);

	return { data, error, status, isLoading };
};

export default useGetNowPlay;
