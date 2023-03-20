import { Outlet } from 'react-router-dom';
import BasicFooter from './Footer/footer';
import BasicHeader from './Header/header';
import ScrollUpBtn from './ScrollUp/scrollup';

const LayOut = () => {
	return (
		<>
			<ScrollUpBtn />
			<BasicHeader />
			<Outlet />
			<BasicFooter />
		</>
	);
};

export default LayOut;
