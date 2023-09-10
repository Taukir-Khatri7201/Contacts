import Root, {
	loader as rootLoader,
	action as rootAction,
} from "../components/Root";
import Error from "../components/Error";
import Contact, { loader as contactLoader } from "../components/Contact";
import EditContact, { action as editAction } from "../components/EditContact";
import { action as destroyAction } from "../components/DeleteContact";
import Index from "../components/Index";

// We need to provide the Error component to errorElement prop for the path to fallback to
// if the path does not match with any route or subroutes.
export default routes = [
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		loader: rootLoader,
		action: rootAction,
		children: [
			// ! This wil display as child of the Root element
			// ? And we have to specify where we want to display this component inside Root component
			// ? By using Outlet
			{
				index: true,
				element: <Index />,
			},
			{
				path: "contacts/:id",
				element: <Contact />,
				loader: contactLoader,
			},
			{
				path: "contacts/:id/edit",
				element: <EditContact />,
				loader: contactLoader,
				action: editAction,
			},
			{
				path: "contacts/:id/destroy",
				action: destroyAction,
				errorElement: <div>Oops! Something went wrong!</div>,
			},
		],
	},
	// This will display as separate page as it's not a child of Root
	// {
	// 	path: "contacts/:id",
	// 	element: <Contact />,
	// },
];
