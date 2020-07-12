import React, { useState, useEffect} from "react";

import "./tailwind.generated.css";
import './App.css';

import data from './data.json'

//import HeaderBg from './images/bg-header-desktop.svg';
import iconRemove from './images/icon-remove.svg';

interface LayoutDefaultProps {
	role : string,
	level: string,
	tools : string[],
	languages: string[]
}

interface jobsInterface {
	id: number,
	company: string,
	logo: string,
	new: boolean,
	featured: boolean,
	position: string,
	role: string,
	level: string,
	postedAt: string,
	contract: string,
	location: string,
	languages: string[],
	tools: string[]
}

/* background - color: #5ba4a4;
color: #fff;
border - radius: 0 5px 5px 0;
border: none;
width: 25px;
margin - right: 15px;
padding: 0;
display: flex;
justify - content: center;
align - items: center;
 */
function App() {
	const [jobs, setJobs] = useState([] as any);
	const [jobFilters, setJobFilters] = useState([] as any);

	useEffect(() => {
		setJobs(data);
	}, []);

	const filteredJobs = jobs.filter((job: LayoutDefaultProps) => {
		const tags = [job.role, job.level].concat(job.tools, job.languages);

		//jobFilters.filter(item => tags.indexOf(item) !== -1);

		return jobFilters.every((filter: string) => tags.indexOf(filter) !== -1);
	})

	const handleTagClick = (tag: String) => {
		if (jobFilters.indexOf(tag) === -1) {
			setJobFilters([...jobFilters, tag]);
		}
	}

	const handleRemoveClick = (tag: string) => {
		const filtersAfterRemoval = jobFilters.filter((filter: string) => filter !== tag);
		setJobFilters(filtersAfterRemoval);
	}

	const handleRemoveAll = () => {
		setJobFilters([]);
	}

	console.log('filteredJobs', filteredJobs)

	return (
		<>
			<header className="bg-teal-500 mb-12 header">
			{/* 	<img src={HeaderBg} alt="bg-header" className="w-full" /> */}
				{jobFilters.length > 0 && <div className="flex flex-wrap bg-white relative bottom-70 mx-auto shadow-sm max-w-xl rounded pl-1 pr-1 pt-1 pb-1">
					{jobFilters.map((item: string) => {
						return (
							<div className="header-filter flex">

								<span className="tag">{item}</span>
								<button className="bg-teal-500 mr-2 p-0 flex w-4 border-none justify-center items-center rounded-l-none rounded-r-md" onClick={() => handleRemoveClick('Frontend')} >
									<img src={iconRemove} alt="close" className="" />
								</button>
							</div>
						)
					})}

					<span className="absolute mr-2 r-2 gray right" onClick={() => handleRemoveAll()}>Clear</span>
				</div>}
			</header>
			<section className="container m-auto">
				{filteredJobs.map((job: jobsInterface) => {
					console.log("item :>> ", job);
					return (
						<div
							className="flex flex-col items-center bg-white shadow-lg my-16 p-6 lg:flex-row mx-6 relative"
							key={job.id}
						>
							<img
								src={job.logo}
								alt={job.position}
								className="w-20 h-20 mb-4 lg:m-0 lg:mr-6 logo"
							/>
							<h2>{job.position}</h2>
							<div className="job-details">
								{job.new && <span className="new-offer">NEW!</span>}
								{job.featured && <span className="featured-offer">FEATURED</span>}
							</div>
							<div className="tags flex justify-center">
								<span className="tag" onClick={() => handleTagClick(job.role)}>{job.role}</span>
								<span className="tag" onClick={() => handleTagClick(job.level)}>{job.level}</span>

								{job.languages.map((language: string) => <span className="tag" onClick={() => handleTagClick(job.level)}>{job.level}</span>)}
								{job.tools.map((tool: string) => <span className="tag" onClick={() => handleTagClick(tool)}>{tool}</span>)}
							</div>
						</div>
					);
				})}
			</section>
			<footer className="container flex flex-row items-center justify-center">
				<div className="attribution">
					Challenge by{" "}
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						rel="noopener noreferrer"
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
