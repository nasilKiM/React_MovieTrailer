import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function DetailPage() {
	const { id } = useParams();
	const { data } = useQuery(['DETAIL'], () => MovieApi.getDetailInfo(id), {
		refetchOnWindowFocus: false,
		retry: 1,
		cacheTime: 1000 * 60 * 60,
	});


	data && console.log(data.data);

	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

	return (
		<S.DetailWrap>
			<S.Video></S.Video>
			<S.Contents>
				<S.DetailTopWrap>
					{data && (
						<S.PostImg src={IMG_BASE_URL + data.data.poster_path}></S.PostImg>
					)}
					<S.TitleInfoWrap>
						<S.TitleInfoWrapTop>
							<S.Title>{data && data.data.title}</S.Title>
							<S.TitleInfoUl>
								<S.TitleInfoLi>
									<S.InnerContent>Rating :</S.InnerContent>
									<S.InnerContent2>
										{data && data.data.vote_average.toFixed(1)}
									</S.InnerContent2>
								</S.TitleInfoLi>
								<S.TitleInfoLi>
									<S.InnerContent>예매율: </S.InnerContent>
									<S.InnerContent2>1위</S.InnerContent2>
								</S.TitleInfoLi>
								<S.TitleInfoLi>
									<S.InnerContent>누적관객수: </S.InnerContent>
									<S.InnerContent2>250,000,000</S.InnerContent2>
								</S.TitleInfoLi>
							</S.TitleInfoUl>
						</S.TitleInfoWrapTop>
						<S.TitleInfoWrapTop>
							<S.TitleInfoUl>
								<S.TitleInfoLi>
									<S.InnerContent>Genres</S.InnerContent>
									{data &&
										data.data.genres.map(item => {
											<S.InnerContent2>{item.name}</S.InnerContent2>;
										})}
								</S.TitleInfoLi>
								<S.TitleInfoLi>
									<S.InnerContent>Release Date : </S.InnerContent>
									<S.InnerContent2>
										{data && data.data.release_date}
									</S.InnerContent2>
								</S.TitleInfoLi>
								<S.TitleInfoLi>
									<S.InnerContent>
										Running Time : {data && data.data.runtime}mins
									</S.InnerContent>
								</S.TitleInfoLi>
							</S.TitleInfoUl>
							<S.TitleInfoUl>
								<S.TitleInfoLi>
									<S.InnerContent>감독: </S.InnerContent>
									<S.InnerContent2>감독</S.InnerContent2>
								</S.TitleInfoLi>
							</S.TitleInfoUl>
							<S.TitleInfoUl>
								<S.TitleInfoLi>
									<S.InnerContent>출연: </S.InnerContent>
									<S.InnerContent2>출연진</S.InnerContent2>
								</S.TitleInfoLi>
							</S.TitleInfoUl>
						</S.TitleInfoWrapTop>
					</S.TitleInfoWrap>
				</S.DetailTopWrap>
				<S.DetailTopWrap>
					<S.Title>{data && data.data.tagline}</S.Title>
					<S.InnerContent2>{data && data.data.overview}</S.InnerContent2>
				</S.DetailTopWrap>
			</S.Contents>
		</S.DetailWrap>
	);
}

export default DetailPage;

const DetailWrap = styled.div`
	margin: 0;
	padding: 0;
	width: 100vw;
`;

const Video = styled.a`
	display: block;
	text-align: center;
	width: 100vw;
	height: 560px;
	color: white;
	background-color: black;
	cursor: pointer;
`;

const Contents = styled.div`
	width: 70vw;
	height: 100vh;
	color: #000;
	margin: 30px auto;
`;

const DetailTopWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 400px;
	width: 100%;
	border-bottom: 1px #d9d9d9 solid; // 지우지 말것
`;

const PostImg = styled.img`
	/* width: 100%; */
	width: 300px;
	height: 350px;
	background-color: beige;
`;

const TitleInfoWrap = styled.div`
	margin-left: 30px;
	width: 900px;
	height: 350px;
`;

const TitleInfoWrapTop = styled.div`
	width: 900px;
	height: 160px;
	/* border-bottom: 1px #d9d9d9 solid; // 지우기 말기 */
`;

const Title = styled.div`
	padding: 20px 30px;
	font-size: 30px;
	font-weight: bold;
`;

const TitleInfoUl = styled.ul`
	width: 600px;
	height: 25px;
	padding: 0;
	margin-left: 30px;
	display: flex;
	justify-content: space-between;
`;

const TitleInfoLi = styled.li`
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

const InnerContent = styled.div`
	font-size: 20px;
`;

const InnerContent2 = styled.div`
	margin-left: 10px;
	font-size: 20px;
	font-weight: bold;
`;

const S = {
	DetailWrap,
	Video,
	Contents,
	DetailTopWrap,
	PostImg,
	TitleInfoWrap,
	TitleInfoWrapTop,
	TitleInfoUl,
	TitleInfoLi,
	Title,
	InnerContent,
	InnerContent2,
};
