import useGetNowPlay from 'hooks/queries/get-nowplay';

const NowPreview = () => {
	const { data } = useGetNowPlay(1);
	console.log(data);

	return (
		<>
			<div>PREVIEW</div>
		</>
	);
};

export default NowPreview;
