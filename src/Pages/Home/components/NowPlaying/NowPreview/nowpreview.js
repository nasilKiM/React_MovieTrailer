import useGetNowPlay from 'hooks/queries/nowplay/get-nowplay';

const NowPreview = () => {
	const { data } = useGetNowPlay(3);
	console.log(data?.data.results);

	return (
		<>
			<div>PREVIEW</div>
		</>
	);
};

export default NowPreview;
