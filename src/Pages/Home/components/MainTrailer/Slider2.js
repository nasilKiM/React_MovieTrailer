import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

const ImgSlider = () => {
	SwiperCore.use([Navigation]);

	return (
		<StyledSwiper>
			<SwiperSlide>1</SwiperSlide>
			<SwiperSlide>2</SwiperSlide>
			<SwiperSlide>3</SwiperSlide>
		</StyledSwiper>
	);
};

export default ImgSlider;

const StyledSwiper = styled(Swiper)`
	width: 100%;
	height: 500px;
`;
