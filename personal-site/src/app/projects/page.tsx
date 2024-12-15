import Image from "next/image";

type ProjectProps = {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
};

export default function Projects() {

    return(
        <div className="flex flex-col place-content-center">
            <h1 className="m-10 text-6xl rothwood-bold">My Projects</h1>
        <Project 
        projectTitle={"Personal Website"}
        projectDescription={"Leveraging VSCode, I was able to utilize Next.js and Tailwind CSS to create & deploy my first web project: the one you see now!"}
        projectImage={"/images/my-headshot.webp"} />
        <Project
        projectTitle={"OverUnderShoot"}
        projectDescription={"The hub of all powerlifting. Highlight your PRs, receive programming, and join communities at OverUnderShoot."}
        projectImage={"/images/rcc-christian-v2.webp"} />
        </div>
    )
};

function Project({projectTitle, projectDescription, projectImage}: ProjectProps) {
    
    return(
        <div className="flex flex-col items-center w-full m-10 sm:ml-0">
            <div className="flex flex-col md:flex-row-reverse justify-evenly items-center max-w-screen-lg m-2 sm:m-10">
            <Image src={projectImage} alt="Project Image" width="375" height="400" />
            <div className="flex flex-col md:w-1/2 items-center md:items-start m-5 gap-5">
                <h2 className="text-3xl sm:text-4xl rothwood-bold">{projectTitle}</h2>
                <p className="text-xl rothwood w-10/12">{projectDescription}</p>
                <button className="text-xl text-zinc-50 bg-blue-700 rothwood rounded-md w-8/12 p-1 hover:bg-blue-400">Read more here</button>
                </div>
            </div>
        </div>
    )
};