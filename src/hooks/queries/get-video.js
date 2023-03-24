import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';

const useVideo = movieId => {
	const { data, error, status, isLoading } = useQuery(
		['GET_VIDEO'],
		() => MovieApi.getVideos(movieId),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 5 * 60,
			onSuccess: res => {
				console.log(res);
			},
			onError: err => {
				console.log(err);
			},
		},
	);
	return { data, error, status, isLoading };
};

export default useVideo;
