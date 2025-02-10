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
                OverUnderShoot is an all-in-one powerlifting hub that brings a social aspect to what seems like an individiaulized sport. As a
                powerlifter who's experienced being apart of a team and not, I know how much of an impact being apart of a team has on not only
                your performance, but your motivations, attitude towards training, and even your discipline. Thus, I wanted to combine two aspects
                of powerlifting; the individual part of programming/tracking and the social aspect of sharing/communicating. This is how I plan to do so.
            </Typography>
            <Typography>
                If there's one thing I check before every practice, it's my programmed workout for the day, done through a website where my coach
                shares programs for each day. It's a slow website, crashes often, and isn't very intuitive to use. Additionally, I typically send
                my coach videos of my sets to his phone number throughout the workout for feedback & in case we need to pivot. Thus, I plan to integrate
                this into OverUnderShoot, where athletes can check programs shared by their coaches & share videos directly through the app, which for coaches
                who work other jobs or have a large roster of athletes to keep track of, would give them a centralized workspace to review & communicate with
                their athletes, seperate from their personal life.
            </Typography>
            <Typography>
                On top of the practical purpose of the app, it also serves to combine the social aspect of the sport. Through communities,
                users can join groups with others & form new connections, share personal records, and even as a centralized point of communication.
                At Northeastern Powerlifting, we use slack for communication, and lots of us post our lifts on Instagram. In OverUnderShoot, communities
                can centralize our team communcation, coach-to-athlete communcation, programming, & milestone sharing.
            </Typography>
            <Typography>
                For the technologies of this project, I took into consideration the users & features of this application. Coaches, who mostly operate
                on a computer/laptop will need access to a web application whereas atheletes, who check their phones, would need mobile access. This led me to
                React Native, as I'll be able to not only create apps compatible on all devices, but I can do this using Javascript and React, the languages I'm
                most familiar with.
            </Typography>
            <Typography>
                Currently, I'm still exploring options for component libraries, complementary frameworks, and more. However, I have a strong idea of what I want
                the application to look like, and I'm excited to carry it out. If you have any questions about the project or know anyone who is interested in helping,
                I'm easiest to reach through <Link href="https://www.instagram.com/chrrstiang/"><strong className="underline">Instagram</strong></Link>! 
            </Typography>
            </div>
        </div>
    )
}