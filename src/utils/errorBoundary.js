import React from 'react';
// import Fallback from "./Fallback";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

//onError가 없기때문에 직접 안에 써줘야한다.
