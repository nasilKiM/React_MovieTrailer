import React from 'react';
import styled from 'styled-components';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

const MovieSlider = ({ dummy }) => {
	console.log(dummy);

	return (
		<S.Wrapper>
			<S.SwiperWrapper>
				<Swiper
					slidesPerView={1.0}
					centeredSlides={true}
					spaceBetween={0}
					grabCursor={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{ delay: 1000 }}
					modules={[Pagination]}
					className="mySwiper"
				>
					{dummy.map((src, index) => {
						return (
							<S.StyledSwiper key={index}>
								<SwiperSlide>
									<SlideContent>
										<Title>{src.title}</Title>
										<Overview>{src.overview}</Overview>
									</SlideContent>
									<SlideImage
										key={index}
										src={`${IMG_BASE_URL}/${src.backdrop_path}`}
										alt={src.title}
									/>
								</SwiperSlide>
							</S.StyledSwiper>
						);
					})}
				</Swiper>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default MovieSlider;

const Wrapper = styled.div`
	width: 100%;
	& > div {
		overflow: hidden;
	}
`;

const SwiperWrapper = styled.div`
	width: 100%;
	border: 1px solid black;
`;

const StyledSwiper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const SlideContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	text-align: center;
	color: white;
`;

const Title = styled.h2`
	font-size: 2rem;
	margin-bottom: 0.5rem;
`;

const Overview = styled.p`
	font-size: 1rem;
`;

const SlideImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

export const S = {
	Wrapper,
	SwiperWrapper,
	StyledSwiper,
};
