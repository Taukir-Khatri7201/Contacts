import Root from "../components/Root";
import Error from "../components/Error";

// We need to provide the Error component to errorElement prop for the path to fallback to
// if the path does not match with any route or subroutes.
export default routes = [
	{
		path: "/",
		element: <Root />,
		children: [],
		errorElement: <Error />,
	},
];
