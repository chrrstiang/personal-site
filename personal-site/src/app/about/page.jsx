'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { AccordionGroup, Typography } from "@mui/joy";
import { Goals } from "../components";

export default function Page() {
    
// state to determine title shown in AboutHeader
const [role, setRole] = useState("Student");

// state to determine image shown in AboutHeader
const [imageUrl, setImageUrl] = useState('/images/my-headshot.webp')

// array holding titles displayed
const titles = [
    "Student",
    "Powerlifter",
    "Developer"
]

useEffect(() => {
    let titleIndex = 0;

    // Function to rotate role state
    const rotateRole = () => {
      setRole(titles[titleIndex]);
      titleIndex = (titleIndex + 1) % titles.length; // Cycle through titles
    };

    // Set the interval to call rotateRole every 2 seconds (2000 ms)
    const intervalId = setInterval(rotateRole, 2000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
  switch (role) {
    case 'Student':
        setImageUrl('/images/grad-pic.webp');
    break;

    case 'Powerlifter':
        setImageUrl('/images/rcc-christian-v2.webp');
    break;
    case "Developer":
        setImageUrl('/images/my-headshot.webp');
    break;
     }}, [role]);

    return(
        <div className="flex flex-col justify-center items-center p-2">
        <AboutHeader imageUrl={imageUrl} role={role} />
        <div className="flex flex-col justify-center mb-20 items-center m-5 sm:m-0 sm:mb-10 gap-10 lg:max-w-screen-lg">
        <Typography className="text-md sm:w-10/12">I’m a student, athlete, son, friend, teammate, and aspiring entrepreneur. 
            Coming from Chelsea, Massachusetts, I’m currently at Northeastern University studying Computer Science and Behavioral Neuroscience with a minor 
            in Entrepreneurial Startups, aiming to contribute to a startup centered around neuro-technology as a technical founder.</Typography>
            <h2 className="aqva sm:w-10/12 text-3xl">My Interests Are...</h2>
        <ul className="sm:w-10/12">
            <li className="mt-2">
                <Typography className="text-md"><strong>Entrepreneurship</strong> - Contributing & building something with my own skills intrigues me much more than
                finding comfort & stability in a role at an already established company.
                </Typography>
            </li>
            <li className="mt-2">
                <Typography className="text-md"><strong>Powerlifting</strong> - For 3 years, I’ve trained for the sport of Powerlifting 
                & competed several times, even representing Northeastern at the national collegiate level.
                </Typography>
            </li>
            <li className="mt-2">
                <Typography className="text-md"><strong>Neuroscience</strong> - Not only on how the brain works, but what we can do with the information we have on the brain is limitless. 
                Neurable, a company focusing on manufacturing wearables backed by neuroscience & artificial intelligence, 
                is a key reason in why I got into neuroscience.
                </Typography>
            </li>
            <li className="mt-2">
                <Typography className="text-md"><strong>Coding</strong> - An obvious one, but coding gives me a feeling of accomplishment. From the little things such as debugging code 
                & making a feature finally work, to the overall ability to create cool things & virtually whatever I want, 
                coding feels like video games all over again.
                </Typography>
            </li>
        </ul>
        <Typography className="text-md sm:w-10/12">I had the opportunity to partake in <strong>Oasis</strong>, a semester-long 
            program offering students the opportunity to work on a project & learn through weekly workshops. 
            I teamed up with 4 others, aiming to build out an application management system targeted towards university students 
            applying to internships & co-ops. Through this experience, I learned to not only collaborate in teams & understand the 
            process of version control, but I also had the opportunity to work in full-stack using <strong>Javascript & React</strong>, 
            from designing & styling React components to building out form logic to retrieve & push data into a Supabase table.</Typography>
        <Typography className="text-md sm:w-10/12">During my time at Northeastern I’ve taken several computer science classes, some being  <strong>
            Discrete Structures, Fundamentals of Computer Science 1 & 2, and Introduction to Mathematical Reasoning.
            </strong> I’ve worked in both functional & object-oriented languages such as <strong>DrRacket & Java</strong>, where I've learned best practices 
            in designing data definitions & functions/methods that manipulate & retrieve data through methods such as recursion, abstractions, 
            search algorithms and sorting algorithms.</Typography>
            <h2 className="aqva sm:w-10/12 text-3xl">Goals</h2>
            <h3 className="aqva sm:w-10/12 text-2xl">Short-term</h3>
            <AccordionGroup 
            className="w-full sm:w-10/12"
            size="md">
                <Goals
                goalTitle={"Complete & deploy a full-stack project"}
                goalDetails={`I don't typically count this website as my first project, although it’s built from scratch. 
                        We weren’t able to deploy our Oasis project in the end, so I’m hoping to spend this semester planning & 
                        building my first full-stack project, & finally deploying it, hopefully acquiring real users.`} />
                <Goals
                goalTitle={"Improve study skills & optimize learning system"}
                goalDetails={`I found myself taking redundant notes & studying for exams for hours during this first 
                        semester while retaining little information. Practical studying such as practice problems/exams work for me, 
                        so I want to create a full system to follow so I spend less time worrying about the ‘how’.`} />
                <Goals
                goalTitle={"Intern during summer 2025 as a software developer/software engineer."}
                goalDetails={`I'd like work experience in software engineering, as it’ll give me more of an understanding 
                        in team collaboration, industry-standard technologies, and overall problem-solving skills. Since I want to 
                        build a startup one day, it would be nice to intern at a startup or smaller company to familiarize myself 
                        with the environment I might be creating later down the line, but I wouldn’t pass down the opportunity anywhere.`} />
            </AccordionGroup>
            <h3 className="aqva sm:w-10/12 text-2xl">Long-term</h3>
            <AccordionGroup
            className="w-full sm:w-10/12"
            size="md">
                <Goals
                goalTitle={"Found & scale a tech startup."}
                goalDetails={`A goal of mine since I was 16. As humans, we only have so much time on this Earth. But you can
                         expand that time through impact. Einstein, who died over half a century ago, is still spoken about to this day
                          because of the lasting impact he left through the theory of relativity. I believe I can do the same through 
                          founding a meaningful company that serves a purpose in this world, and makes people’s lives easier. I want my 
                          time to continue past just my lifespan.`} />
                <Goals
                goalTitle={"Invest in young startups & become a mentor figure."}
                goalDetails={`I think it would be really cool to give back to the startup community in a way, by investing & believing 
                        in startups, after I had the experience of successfully scaling & exiting. My expertise & experience would be 
                        helpful to others, and the idea of watching others grow & accomplish their dreams that I once had seems like a 
                        full-circle moment that I would want to experience.`} />
                <Goals
                goalTitle={"Establish financial comfort for my family while doing what I love."}
                goalDetails={`At the end of it all, past career & accomplishments, I want to make enough money to comfortably live while
                            doing what I love. I hope to raise a family one day, and the last thing I want is to worry about my financial
                            situation during the most memorable momenents of my family's lives. I aim to make decisions keeping this goal in mind.`} />
            </AccordionGroup>
            </div>
            </div>
    )
};

function AboutHeader({imageUrl, role}) {
    
    return(
    <div className="flex flex-col items-center md:m-10 md:justify-evenly md:flex-row-reverse w:1/2 max-w-screen-md">
        <Image src={imageUrl} alt="headshot of christian garcia" width="350" height="500" />
        <h1 className="md:w-1/2 text-center text-4xl sm:text-5xl p-5 mb-5 aqva">
        Christian is a <span>{role}</span>
        </h1>
    </div>
    )
};