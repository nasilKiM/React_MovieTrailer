import useGetNowPlay from 'hooks/queries/nowplay/get-nowplay';

const NowPreview = () => {
	const { data } = useGetNowPlay();
	console.log(data);
	return (
		<>
			<div>PREVIEW</div>
		</>
	);
};

export default NowPreview;
