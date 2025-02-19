import Image from "next/image"
import { Typography } from "@mui/joy";
import Link from "next/link";
import {Accordion, AccordionGroup, AccordionSummary, AccordionDetails} from "@mui/joy";

// components for about page

export function Goals({goalTitle, goalDetails}: any) {
    
    return(
        <Accordion>
            <AccordionSummary>{goalTitle}</AccordionSummary>
                <AccordionDetails>
                    <Typography component="p">{goalDetails}</Typography>
                </AccordionDetails>
        </Accordion>
    )
};

// components for projects page(s)

type ProjectProps = {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
};

export function Project({projectTitle, projectDescription, projectImage, projectLink}: ProjectProps) {
    
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

type HeaderProp = {
    projectTitle: string;
    projectImage: string;
}

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

// components for contact page

type LinksProps ={
    iconLink: string
    altText: string
    linkHref: string
    appName: string
}

export function Links({iconLink, altText, linkHref, appName}: LinksProps) {
    return(
        <div className="flex flex-row items-center gap-3">
            <Image src={iconLink} alt={altText} width="30" height="30" />
            <Link href={linkHref}>
                <span className="text-3xl aqva italic">{appName}</span>
                </Link>
        </div>
    )
};