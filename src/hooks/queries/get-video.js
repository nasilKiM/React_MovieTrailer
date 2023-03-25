import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';

const useVideo = movieId => {
	const { data, error, status, isLoading } = useQuery(
		['GET_VIDEO'],
		() => MovieApi.getVideos(movieId),
		queryConfig,
	);
	return { data, error, status, isLoading };
};

export default useVideo;
