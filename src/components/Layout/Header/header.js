import styled from 'styled-components';
import SearchBar from './search';

const BasicHeader = () => {
	return (
		<S.Wrapper>
			<>헤더</>

			<SearchBar />
		</S.Wrapper>
	);
};

export default BasicHeader;

const Wrapper = styled.div`
	color: white;
	background-color: black;
	padding: 1%;
`;

const SearchBox = styled.div`
	border: 3px solid lawngreen;
`;
const S = {
	Wrapper,
	SearchBox,
};
