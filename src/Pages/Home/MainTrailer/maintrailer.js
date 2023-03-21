import styled from 'styled-components';

const MainTrailer = () => {
	return (
		<>
			<Test></Test>
			{/* <Test onWheel={e => console.log(e)}></Test> */}
		</>
	);
};

export default MainTrailer;

const Test = styled.div`
	width: 100%;
	height: 2000px;
`;

/* 
	infiniteScroll 작동시킬거니.. 
	스크롤 내리면 헤더 푸터 사라질거고,, 
	푸터가 잇어야하나?? 언젠가 끝이 오니 만들긴해야겟지 
	스크롤 내리다가 살짝 올리면 헤더 내려오게 하고싶다
	근데 그러면 scrollup이 필요없나?
*/
