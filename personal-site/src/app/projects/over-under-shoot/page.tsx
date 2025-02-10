import { Typography } from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../page";

export default function Main() {

    return(
        <div className="flex flex-col justify-center items-center p-2">
            <Header 
            projectTitle="OverUnderShoot - Powerlifting Hub" 
            projectImage="/images/rcc-christian-v2.webp"
            projectDescription=""
            projectLink=""/>
        <div className="flex flex-col justify-center mb-20 items-center m-5 sm:m-0 sm:mb-10 gap-10 lg:max-w-screen-lg">
            <Typography>
                As my very first "project", I wanted to build a personal website for a few reasons. One reason was to give me the opportunity
                to showcase anything I'm working on, describe myself to those interested, and overall have a professional hub for Christian Garcia.
                The second reason which I consider the main reason, was to familiarize myself with the process of beginning a project, deciding
                which technologies to use, debugging code, using external resources & documentation to figure out a problem, and finally
                getting something out there. Throughout building this website, I worked in a javascript environment, as I was familiar with
                it from past courses & projects.
            </Typography>
            <Typography>
                For this site, I chose Next.js as my react framework, due to the file-based routing system & transferability, as many companies
                work with this framework for their front-end. Organizing my project and html was extremely easy, but this was my first time
                working with Tailwind CSS. Styling just the first page of this site took longer than styling the rest combined, but once I got
                the hang of Tailwind, I felt like I couldn't look back. Working with Next.js components was much easier too, especially using
                Link components to redirect the user to a different page.
            </Typography>
            <Typography>
                On top of Next.js, I decided to experiment with a component library, Joy-UI. I liked the look of their components, & this would also
                speed up the process, as components like Accordions already had their functionality built out. However, this was another technology
                to learn half-way through the project, and cost me more time learning it & integrating their styling system into Tailwind's
                styling system. I spent lots of time debugging, and one major problem I ran into was the dark-mode recognition in Joy-UI components
                compared to standard HTML elements. When a user was in dark mode, the theme changed for HTMl elements, but Joy-UI components failed
                to recognize it, leaving a mismatch in theme. Although working with Joy-UI expanded my ability to implement components more 
                efficiently, I plan to decide on a componenet library prior to building, as this would help me avoid compatibility issues & replacing chunks of code.
            </Typography>
            <Typography>
                The process of building this site went a lot like this, too. I came across many unexpected issues, from my operating system not
                allowing me to install certain dependencies to smaller issues such as functions not executing properly. This experience taught me a lot
                about debugging and troubleshooting, as things won't always go as expected. How to search for answers, use my resources, read documentation
                and logically think through a problem were all skills that I improved on during this project. 
            </Typography>
            <Typography>
                I plan to continue improving this website beyond adding more content to the site. From styling to transitions & animations, I
                hope to learn more ways to bring this page to life & communicate my personality through these methods. Additionally, I'm
                definitely going to work on improving my code reusability. React components are meant to be reusable, yet I
                find myself making multiple variations that serve a similar purpose. Next.js grants a large use of features and ways to improve
                a react project, and I felt that I only took advantage of a few. During my next project, <Link href="/projects/over-under-shoot">OverUnderShoot</Link>, I plan to pick a framework
                with more intent, and overall choosing my technologies more carefully, as this will make building much more efficient and seamless.
            </Typography>
            </div>
        </div>
    )
}