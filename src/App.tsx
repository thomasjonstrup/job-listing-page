import React from "react";

import "./tailwind.generated.css";

import data from './data.json'

import HeaderBg from './images/bg-header-desktop.svg';

function App() {
	return (
		<>
			<header className="bg-teal-500 mb-12">
				<img src={HeaderBg} alt="bg-header" className="w-full" />
			</header>
			<section className="container m-auto">
				{data.map((item) => {
					console.log("item :>> ", item);
					return (
						<div
							className="flex flex-col items-center bg-white shadow-lg my-16 p-6 lg:flex-row mx-6"
							key={item.id}
						>
							<img
								src={item.logo}
								alt={item.position}
								className="w-20 h-20 mb-4 lg:m-0 lg:mr-6"
							/>
							<h2>{item.position}</h2>
						</div>
					);
				})}
			</section>
			<footer className="container flex flex-row items-center justify-center">
				<div className="attribution">
					Challenge by{" "}
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a href="https://github.com/thomasjonstrup">
						Thomas Jonstrup
					</a>
					.
				</div>
			</footer>
		</>
	);
}

export default App;
