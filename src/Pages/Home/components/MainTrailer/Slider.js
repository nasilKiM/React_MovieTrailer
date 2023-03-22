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
							<S.StyledSwiper>
								<SwiperSlide>
									<img
										key={index}
										src={`${IMG_BASE_URL}/${src.backdrop_path}`}
										alt=""
									/>
									<p>{dummy.title}</p>
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

const StyledSwiper = styled(Swiper)`
	width: 100%;
`;

export const S = {
	Wrapper,
	SwiperWrapper,
	StyledSwiper,
};
