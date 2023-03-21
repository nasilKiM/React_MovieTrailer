import { useQuery } from '@tanstack/react-query';
import NowPlayApi from 'Apis/nowPlayApi';
import { QUERY_KEY } from 'consts/query-key';

const useGetNowPlay = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.NOW_PLAY],
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
