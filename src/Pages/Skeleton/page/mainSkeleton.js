import React from 'react';

import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const MainPageSkeleton = () => {
	const skeletonArray = [1, 2, 3, 4];

	return (
		<S.Cover>
			<S.Wrapper>
				<S.Banner>
					<Skeleton
						variant="rounded"
						width="100%"
						height="100%"
						color="white"
						animation="wave"
					/>
				</S.Banner>
			</S.Wrapper>
			<S.PreviewBg>
				<S.SkeletonContainer>
					{skeletonArray.map(index => (
						<S.SkeletonBox key={index * 2}>
							<Skeleton
								animation="wave"
								key={index * 2}
								variant="rounded"
								sx={{
									width: '100%',
									height: '100%',
								}}
							/>
						</S.SkeletonBox>
					))}
				</S.SkeletonContainer>
			</S.PreviewBg>
			<S.PreviewBg>
				<S.SkeletonContainer>
					{skeletonArray.map(index => (
						<S.SkeletonBox>
							<Skeleton
								animation="wave"
								key={index * 2}
								variant="rounded"
								sx={{
									width: '100%',
									height: '100%',
								}}
							/>
						</S.SkeletonBox>
					))}
				</S.SkeletonContainer>
			</S.PreviewBg>
			<S.PreviewBg>
				<S.SkeletonContainer>
					{skeletonArray.map(index => (
						<S.SkeletonBox>
							<Skeleton
								animation="wave"
								key={index * 2}
								variant="rounded"
								sx={{
									width: '100%',
									height: '100%',
								}}
							/>
						</S.SkeletonBox>
					))}
				</S.SkeletonContainer>
			</S.PreviewBg>
		</S.Cover>
	);
};

export default MainPageSkeleton;

const Cover = styled.div`
	width: 100%;
	background-color: gray;
`;

const Wrapper = styled.div`
	width: 80%;
	padding-top: 10px;
	min-width: 350px;
	max-width: 1200px;
	@media (min-width: 701px) {
		width: 95%;
		padding: 20px 0;
	}
	@media (max-width: 700px) {
		width: 95%;
		padding: 20px 0;
	}
	@media (max-width: 900px) {
		width: 90%;
		padding: 20px 0;
	}
	margin: 0 auto;
`;

const Banner = styled.div`
	width: 100%;
	padding-bottom: 20px;
	@media (min-width: 851px) {
		height: 500px;
	}
	@media (max-width: 850px) {
		height: 400px;
	}
	@media (max-width: 650px) {
		height: 350px;
	}
	@media (max-width: 450px) {
		height: 300px;
	}
`;

const PreviewBg = styled.div`
	width: 100%;
	padding: 20px 10px;
	> * {
		padding-top: 10px;
	}
`;

const SkeletonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	gap: 15px;
`;

const SkeletonBox = styled.div`
	width: 250px;
	height: 350px;
	@media (max-width: 1024px) {
		width: 210px;
		height: 300px;
	}
	@media (max-width: 900px) {
		width: 180px;
		height: 250px;
	}
	@media (max-width: 850px) {
		width: 160px;
		height: 220px;
	}
	@media (max-width: 770px) {
		width: 140px;
		height: 190px;
	}
	@media (max-width: 680px) {
		width: 130px;
		height: 160px;
	}
	@media (max-width: 640px) {
		width: 120px;
		height: 140px;
	}
	@media (max-width: 590px) {
		width: 110px;
		height: 130px;
	}
	@media (max-width: 540px) {
		width: 95px;
		height: 120px;
	}
	@media (max-width: 490px) {
		width: 80px;
		height: 110px;
	}
`;

const S = {
	Cover,
	Wrapper,
	Banner,
	PreviewBg,
	SkeletonContainer,
	SkeletonBox,
};
