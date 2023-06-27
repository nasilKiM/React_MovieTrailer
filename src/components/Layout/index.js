import { Outlet } from 'react-router-dom';
import BasicFooter from './Footer/footer';
import BasicHeader from './Header/header';
import styled from 'styled-components';

const LayOut = () => {
	return (
		<>
			<Wrapper>
				<StickyHeader>
					<BasicHeader />
				</StickyHeader>
				<Outlet />
				<FooterWrapper>
					<BasicFooter />
				</FooterWrapper>
			</Wrapper>
		</>
	);
};

export default LayOut;

const Wrapper = styled.div`
	background-color: black;
`;

const StickyHeader = styled.div`
	position: sticky;
	background-color: black;
	border-bottom: 2px solid gray;
	top: 0;
	z-index: 100000;
`;

const FooterWrapper = styled.div`
	border-top: 2px solid gray;
`;
