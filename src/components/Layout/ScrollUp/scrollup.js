import styled from 'styled-components';
// import { flexAllCenter } from 'Styles/common';

const ScrollUpBtn = () => {
	return (
		<Div>
			<Icon onClick={window.scrollTo(0, 0)}>top</Icon>
		</Div>
	);
};

export default ScrollUpBtn;

const Div = styled.div`
	width: 100%;
	background-color: green;
	position: relative;
`;

const Icon = styled.span`
	width: 40px;
	height: 40px;
	border: 1px solid red;
	border-radius: 50%;
	margin: 20px;
	background-color: purple;
	color: white;
	display: flex;
	position: absolute;
	right: 50px;
	/* left: 30px; */
	bottom: 30px;
`;
