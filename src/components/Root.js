import React from "react";
import { Outlet } from "react-router-dom";

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
							<a href={`/contacts/1`}>Taukir Khatri</a>
						</li>
						<li>
							<a href={`/contacts/2`}>Zafar Khatri</a>
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
