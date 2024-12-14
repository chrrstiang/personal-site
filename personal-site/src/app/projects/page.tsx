import Image from "next/image";

type ProjectProps = {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
};

export default function Projects() {

    return(
        <div>
        <Project 
        projectTitle="Project Title"
        projectDescription={"From stressed to impressed, our Venato app allows stressed college students to optimize their chances at landing that internship and finally make the jump into adulthood"}
        projectImage={"https://www.fakeimage.com"} />
        </div>
    )
};

function Project({projectTitle, projectDescription, projectImage}: ProjectProps) {
    
    return(
        <div>
            <div>
                <h2>{projectTitle}</h2>
                <p>{projectDescription}</p>
                <div>Read more here</div>
            </div>
            <div>Image div</div>
        </div>
    )
};