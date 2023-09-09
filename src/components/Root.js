import React from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
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
					<form method="post">
						<button type="submit">New</button>
					</form>
				</div>
				<nav>
					<ul>
						<li>
							{/* We just need to change 'a href' with 'Link to' */}
							{/* With 'a href' we had a problem of reloading the page on clicking the link */}
							{/* <a href={`/contacts/1`}>Taukir Khatri</a> */}
							<Link to={`/contacts/1`}>Taukir Khatri</Link>
						</li>
						<li>
							<Link to={`/contacts/2`}>Zafar Khatri</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
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
