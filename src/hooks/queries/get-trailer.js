import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';

const getNowPlay = async params => {
	const res = await MovieApi.getNowPlaying(params);
	return res.data;
};

const useNowPlay = params => {
	const { data, error, status, isLoading } = useQuery(
		['NOW_PLAY'],
		getNowPlay(params),
		{ ...queryConfig },
	);
	return { data, error, status, isLoading };
};
export default useNowPlay;
