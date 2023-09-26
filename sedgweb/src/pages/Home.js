import React from "react";
import ProjectCard from "../ProjectCard";

function Home() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            imageSrc: 'project1.jpg',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2',
            imageSrc: 'project2.jpg',
            link: 'https://example.com/project2',
        },
        // Add more project objects as needed
    ];
    return (
        <div className="App">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    )
}

export default Home