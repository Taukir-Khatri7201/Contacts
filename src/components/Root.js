import React from "react";
import {
	Outlet,
	useLoaderData,
	Form,
	redirect,
	NavLink,
	useNavigation, // used to show the loaders
} from "react-router-dom";
import { createContact, getContacts } from "../utils/contacts";

export async function loader() {
	const contacts = await getContacts();
	return { contacts };
}

export async function action() {
	const contact = await createContact();
	return redirect(`/contacts/${contact.id}/edit`);
}

const Root = () => {
	const { contacts } = useLoaderData();
	const navigation = useNavigation();
	// useNavigation returns current navigation state
	// It can be one of
	// 	1. "idle"
	// 	2. "submitting"
	// 	3. "loading"

	return (
		<>
			<div id="sidebar">
				<h1>Contacts</h1>
				<div>
					<form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search contacts"
							placeholder="Search"
							type="search"
							name="q"
						/>
						<div id="search-spinner" aria-hidden hidden={true} />
						<div className="sr-only" aria-live="polite"></div>
					</form>
					<Form method="post">
						<button type="submit">New</button>
					</Form>
				</div>
				<nav>
					{contacts.length ? (
						<ul>
							{contacts.map((contact) => (
								<li key={contact.id}>
									<NavLink
										to={`contacts/${contact.id}`}
										className={({ isActive, isPending }) =>
											isActive
												? "active"
												: isPending
												? "pending"
												: ""
										}
									>
										{contact.first || contact.last ? (
											<>
												{contact.first} {contact.last}
											</>
										) : (
											<i>No Name</i>
										)}
										{contact.favorite && <span>★</span>}
									</NavLink>
								</li>
							))}
						</ul>
					) : (
						<p>
							<i>No contacts</i>
						</p>
					)}
				</nav>
			</div>
			<div
				id="detail"
				className={navigation.state === "loading" ? "loading" : ""}
			>
				{/**
				 * We want to display the Contact component here. So place a Outlet here.
				 * Outlet works as a placeholder.
				 * We will put our components inside at place of Outlet as per the need.
				 * */}
				<Outlet />
			</div>
		</>
	);
};

export default Root;
