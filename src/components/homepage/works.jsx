import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./rocket.png"
								alt="rocket-mortgage"
								className="work-image"
							/>
							<div className="work-title">Rocket Mortgage</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">May 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./ispace.jpeg"
								alt="ispace"
								className="work-image"
							/>
							<div className="work-title">ispace, inc.</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">May 2023 - August 2023</div>
						</div>

						<div className="work">
							<img
								src="./woodbridge.png"
								alt="woodbridge"
								className="work-image"
							/>
							<div className="work-title">Woodbridge Foam Corporation</div>
							<div className="work-subtitle">
								Product Engineering Intern
							</div>
							<div className="work-duration">May 2022 - April 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
