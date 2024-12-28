'use client';
import Image from "next/image";
import { rotation } from "../../../lib/animations";
import { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
 

export default function About() {
    
const [role, setRole] = useState("Student");

const [imageUrl, setImageUrl] = useState('/images/my-headshot.webp')

const titles = [
    "Student",
    "Powerlifter",
    "Programmer",
    "Entrepreneur"
]

useEffect(() => {
    let titleIndex = 0;

    // Function to rotate role
    const rotateRole = () => {
      setRole(titles[titleIndex]);
      titleIndex = (titleIndex + 1) % titles.length; // Cycle through titles
    };

    // Set the interval to call rotateRole every 2 seconds (2000 ms)
    const intervalId = setInterval(rotateRole, 4000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  useEffect(() => {
  switch (role) {
    case 'Student':
    case 'Programmer':
        setImageUrl('/images/my-headshot.webp');
    break;

    case 'Powerlifter':
    case 'Entrepreneur':
        setImageUrl('/images/rcc-christian-v2.webp')
    break;
     }}, [role]);

    return(
        <div className="flex flex-col justify-center items-center m-2">
        <div className="flex flex-col items-center md:m-10 md:justify-evenly md:flex-row-reverse w:1/2 max-w-screen-md">
        <Image src={imageUrl} alt="headshot of christian garcia" width="350" height="500" />
        <h1 className="md:w-1/2 text-center text-4xl sm:text-4xl p-5 mb-5 rothwood-bold">
        Christian is a <CSSTransition
        in={true}
        timeout={500}
        classNames="role"
        unmountOnExit
        key={role}><span>{role}</span></CSSTransition>
            </h1>
        </div>
        <div className="flex flex-col justify-center mb-20 items-center m-5 sm:m-0 sm:mb-10 gap-10 lg:max-w-screen-lg">
        <p className="rothwood sm:w-10/12">I’m a student, athlete, son, friend, teammate, boyfriend, uncle, and aspiring entrepreneur. 
            Coming from Chelsea, Massachusetts, I was fortunate to be able to attend a university so close to home. 
            I’m currently at Northeastern University studying Computer Science and Behavioral Neuroscience with a minor 
            in Entrepreneurial Startups, aiming to contribute to a startup centered around neuro-technology as a technical founder.</p>
            <h2 className="rothwood-bold sm:w-10/12 text-3xl">My Interests Are...</h2>
        <ul className="rothwood sm:w-10/12">
            <li className="mt-2"><strong>Entrepreneurship</strong> - Contributing & building something with my own skills intrigues me much more than
            finding comfort & stability in a role at an already established company.</li>
            <li className="mt-2"><strong>Powerlifting</strong> - For 3 years, I’ve trained for the sport of Powerlifting 
                & competed several times, even representing Northeastern at the national collegiate level.</li>
            <li className="mt-2"><strong>Neuroscience</strong> - Not only on how the brain works, but what we can do with the information we have on the brain is limitless. 
                Neurable, a company focusing on manufacturing wearables backed by neuroscience & artificial intelligence, 
                is a key reason in why I got into neuroscience.</li>
            <li className="mt-2"><strong>Coding</strong> - An obvious one, but coding gives me a feeling of accomplishment. From the little things such as debugging code 
                & making a feature finally work, to the overall ability to create cool things & virtually whatever I want, 
                coding feels like video games all over again.</li>
        </ul>
        <p className="rothwood sm:w-10/12">While at Northeastern, I had the opportunity to partake in <strong>Oasis</strong>, a semester-long 
            club offering students the opportunity to work on a project & learn through weekly workshops. 
            I teamed up with 4 others, aiming to build out an application management system targeted towards university students 
            applying to internships & co-ops. Through this experience, I learned to not only collaborate in teams & understand the 
            process of version control, but I also had the opportunity to work in full-stack, designing & building out components in 
            React, as building out the form logic to retrieve & push data into Supabase.</p>
        <p className="rothwood sm:w-10/12">During my time at Northeastern I’ve taken three core computer science classes -  <strong>
            Discrete Structures, Fundamentals of Computer Science 1, and Introduction to Mathematical Reasoning.
            </strong> I’ve learned about multiple data structures, some being lists, graphs, and trees. Additionally, 
            I learned how to manipulate data in these structures through methods such as recursion, list abstractions & sorting algorithms, as well as 
            retrieve data through search algorithms such as breadth first search, depth first search, and Dijkstra’s algorithm.</p>
            <h2 className="rothwood-bold sm:w-10/12 text-3xl">Goals</h2>
            <h3 className="rothwood-bold sm:w-10/12 text-2xl">Short-term</h3>
            <div>
            
            </div>
            <div className="hidden">
                <p>I don’t typically count this website as my first project, although it’s built from scratch. 
                    We weren’t able to deploy our oasis project in the end, so I’m hoping to spend this semester planning & 
                    building my first full-stack project, & finally deploying it, hopefully acquiring real users.</p>
            </div>
            <h3 className="rothwood-bold sm:w-10/12 text-2xl">Long-term</h3>
            </div>
            </div>
    )
};

function AboutHeader() {
    return(
        <div>
            <h1>Christian is a "Title"</h1>
            <div>Image</div>
        </div>
    )
};

function AboutText() {
    
    return(
        <div>
        <p>This is where your biography is going to be</p>
        <p>This is where your interests are going to be</p>
        <p>This is where your work experience is going to be</p>
        <p>This is where your desired opportunities and goals are going to be</p>
    </div>
    )
};