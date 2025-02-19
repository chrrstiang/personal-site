import Image from "next/image";
import { Typography } from "@mui/joy";
import Link from "next/link";

type ProjectProps = {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
};

type HeaderProp = {
    projectTitle: string;
    projectImage: string;
}

export default function Projects() {

    return(
        <div className="flex flex-col place-items-center">
            <h1 className="m-10 text-6xl aqva">My Projects</h1>
            <h2 className="m-10 text-4xl aqva">Current</h2>
        <Project 
        projectTitle={"Personal Website"}
        projectDescription={"Leveraging Next.js and the Joy-UI library, I created and deployed my first web project: the one you see now!"}
        projectImage={"/images/my-headshot.webp"}
        projectLink={"/projects/personal-website"} />
        <h2 className="m-10 text-4xl aqva">Planned</h2>
        <Project
        projectTitle={"OverUnderShoot"}
        projectDescription={"The hub of all powerlifting. Highlight your PRs, receive programming, and join communities at OverUnderShoot."}
        projectImage={"/images/rcc-christian-v2.webp"}
        projectLink={"/projects/over-under-shoot"} />
        </div>
    )
};

function Project({projectTitle, projectDescription, projectImage, projectLink}: ProjectProps) {
    
    return(
        <div className="flex flex-col items-center w-full m-10 sm:ml-0">
            <div className="flex flex-col md:flex-row-reverse justify-evenly items-center max-w-screen-lg m-2 sm:m-10">
            <Image src={projectImage} alt="Project Image" width="375" height="400" />
            <div className="flex flex-col md:w-1/2 items-center md:items-start m-5 gap-5">
                <h2 className="text-3xl sm:text-4xl aqva">{projectTitle}</h2>
                <Typography className="text-xl w-10/12">{projectDescription}</Typography>
                <Link href={projectLink} className="text-xl text-center text-zinc-50 bg-blue-700 rounded-md w-8/12 p-1 hover:bg-blue-400">Read more here</Link>
                </div>
            </div>
        </div>
    )
};

export function Header({projectTitle, projectImage}: HeaderProp) {
    
    return(
    <div className="flex flex-col items-center md:m-10 md:justify-evenly md:flex-row-reverse w:1/2 max-w-screen-lg">
        <Image src={projectImage} alt="headshot of christian garcia" width="350" height="500" />
        <h1 className="md:w-1/2 text-center text-4xl sm:text-5xl p-5 mb-5 aqva">
        {projectTitle}
        </h1>
    </div>
    )
};