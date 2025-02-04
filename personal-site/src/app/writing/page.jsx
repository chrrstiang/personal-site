'use client';
import Image from "next/image";
import { Input, FormControl, FormLabel, Typography } from "@mui/joy";
import { useState } from "react";

export default function WritingContainer() {

    // State to hold user input in search bar
    const [ searchInput, setSearchInput ] = useState('')

    // handleChange allows for user to type into input
    function handleChange(e) {
    setSearchInput(e.target.value)
    }

    // array holding all writing content (current dummy data)
        const writings = [
            { title: "Building a full-stack mobile app",
                date: "December 14th, 2024"},
            { title: "Attempting & failing my first startup",
                date: "December 14th, 2024"},
            { title: "Deploying my first project",
                date: "December 14th, 2024"},
            { title: "Collegiate Cup 2024: My best competition yet",
                date: "December 14th, 2024"}
        ]
    // function that displays only the writing components with a title that contains the given string
    function filterWriting(arr) {
       return arr.filter((w) => w.title.toLowerCase().includes(searchInput.toLowerCase()))
    }


    return(
        <div className="flex flex-col items-center">
            <h1 className="m-10 text-6xl aqva py-8">Writing</h1>
            <FormControl className="flex flex-column sm:place-items-center md:justify-normal px-10 md:px-0 mb-7 w-full md:max-w-screen-sm">
                <Input onChange={handleChange} className="border w-9/12 rothwood" placeholder="Search" />
            </FormControl>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-10 gap-5 lg:gap-10">
                {filterWriting(writings).length > 0 ? 
                filterWriting(writings).map((w) => <Writing key={w.title} writingTitle={w.title} writingDate={w.date} />) : 
                writings.map((w) => <Writing key={w.title} writingTitle={w.title} writingDate={w.date} />)}
            </div>
        </div>
    )
};

function Writing({writingTitle, writingDate}) {

    return(
        <div className="flex flex-col items-start">
            <h1 className="text-3xl aqva italic underline">{writingTitle}</h1>
            <Typography className="text-lg">Posted on {writingDate}</Typography>
        </div>
    )
}