'use client';
import Image from "next/image";
import { rotation } from "../../../lib/animations";
import { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
 

export default function About() {
    
const [role, setRole] = useState<string>("Student");

const titles : string[] = [
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

    return(
        <div className="flex flex-col justify-center items-center m-2">
        <div className="flex flex-col items-center md:m-10 md:justify-evenly md:flex-row-reverse w:1/2 max-w-screen-md">
        <Image src='/images/my-headshot.webp' alt="headshot of christian garcia" width="350" height="500" />
        <h1 className="md:w-1/2 text-center text-4xl sm:text-4xl p-5 mb-5 rothwood-bold">
        Christian is a <span>{role}</span>
            </h1>
        </div>
        <div className="flex flex-col justify-center mb-20 items-center m-5 sm:m-0 sm:mb-10 gap-10 lg:max-w-screen-lg">
        <p className="rothwood sm:w-10/12">BIOGRAPHY:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </p>
        <p className="rothwood sm:w-10/12">INTERESTS:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
        <p className="rothwood sm:w-10/12">EXPERIENCE:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
        <p className="rothwood sm:w-10/12">GOALS:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
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