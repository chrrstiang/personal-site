import { Project } from "../components";

export default function Page() {

    return(
        <div className="flex flex-col place-items-center">
            <h1 className="m-10 text-6xl aqva">My Projects</h1>
            <h2 className="m-10 text-4xl aqva underline">Current</h2>
        <Project 
        projectTitle={"Personal Website"}
        projectDescription={"Leveraging Next.js and the Joy-UI library, I created and deployed my first web project: the one you see now!"}
        projectImage={"/images/my-headshot.webp"}
        projectLink={"/projects/personal-website"} />
        <h2 className="m-10 text-4xl aqva underline">Planned</h2>
        <Project
        projectTitle={"OverUnderShoot"}
        projectDescription={"The hub of all powerlifting. Highlight your PRs, receive programming, and join communities at OverUnderShoot."}
        projectImage={"/images/rcc-christian-v2.webp"}
        projectLink={"/projects/over-under-shoot"} />
        </div>
    )
};