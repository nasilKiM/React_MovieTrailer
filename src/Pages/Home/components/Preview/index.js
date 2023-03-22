import APIs from 'Apis/apis';
import styled from 'styled-components';

const Preview = Arr => {
	const temp = APIs.getNowPlaying(5);
	console.log(temp);
	return (
		<S.Wrapper>
			<div></div>
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	width: 80%;
`;

const S = {
	Wrapper,
};
