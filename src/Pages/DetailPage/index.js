import useDetailInfo from 'hooks/queries/detailInfo/get-detail';
import useVideo from 'hooks/queries/video/get-video';
import { useParams } from 'react-router-dom';
import DetailInfo from './components/detailInfo';

function DetailPage() {
	const { id } = useParams();
	const { data: detail } = useDetailInfo(631842); // 매개변수 id로 변경
	detail && console.log(detail.data);

	const { data: video } = useVideo(631842);
	video && console.log(video.data.results[0].key);

	return (
		<>
			{detail && (
				<DetailInfo
					title={detail.data.title}
					popularity={detail.data.popularity}
					release_date={detail.data.release_date}
					runtime={detail.data.runtime}
					vote_average={detail.data.vote_average}
					overview={detail.data.overview}
					genres={detail.data.genres[0].name}
					tagline={detail.data.tagline}
					poster_path={detail.data.poster_path}
					videoId={video.data.results[0].key}
				/>
			)}
		</>
	);
}

export default DetailPage;

