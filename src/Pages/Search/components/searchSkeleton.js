import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const SearchSkeleton = () => {
	return Array(4)
		.fill(0)
		.map(() => (
			<Wrapper>
				<Left>
					<StyledSkeleton variant="rectangular" />
				</Left>
				<Right>
					<StyledSkeleton variant="rectangular" />
					<StyledSkeleton variant="rectangular" />
					<StyledSkeleton variant="rectangular" />
					<StyledSkeleton variant="rectangular" />
					<StyledSkeleton variant="rectangular" />
					<StyledSkeleton variant="rectangular" />
					<StyledSkeleton variant="rectangular" />
					<StyledSkeleton variant="rectangular" />
				</Right>
			</Wrapper>
		));
};
export default SearchSkeleton;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 50vh;
	border: 4px solid cornflowerblue;
	border-radius: 25px;
`;
const Left = styled.div`
	animation: 'wave';
	background-color: aliceblue;
	width: 20%;
	border: 1px solid red;
	margin-right: 1.5rem;
`;

const Right = styled.div`
	background-color: aliceblue;
	border: 1px solid green;
	margin-top: 1.5rem;
	flex: 1;
	width: 70%;

	& > :not(:first-child) {
		margin-top: 1rem;
	}
`;
const StyledSkeleton = styled(Skeleton)`
	animation: 'wave';
	width: 100%;
	background-color: #f0f0f0;
`;
