import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';

export const usePopular = () => {
	const { data: popular, isLoading } = useQuery(
		['POPULAR'],
		() => MovieApi.getPopular(),
		queryConfig,
	);
	return { popular, isLoading };
};

export const useNowPlaying = nowPlayingLst => {
	const { data: nowPlaying, isLoading } = useQuery(
		['NOW_PLAYING'],
		() => MovieApi.getNowPlaying(nowPlayingLst),
		queryConfig,
	);
	return { nowPlaying, isLoading };
};

export const useTopRated = topRatedList => {
	const { data: topRated, isLoading } = useQuery(
		['TOP_RATED'],
		() => MovieApi.getTopRated(topRatedList),
		queryConfig,
	);
	return { topRated, isLoading };
};

export const useUpComing = upComingList => {
	const { data: upComing, isLoading } = useQuery(
		['UP_COMING'],
		() => MovieApi.getUpComing(upComingList),
		queryConfig,
	);
	return { upComing, isLoading };
};
