'use client';
import Image from "next/image";
import { Input, FormControl, FormLabel } from "@mui/joy";
import { useState } from "react";

type WritingProps = {
    writingTitle: string,
    writingDate: string
}

export default function WritingContainer() {

    // State to hold user input in search bar
    const [ searchInput, setSearchInput ] = useState('')

    // handleChange allows for user to type into input
    function handleChange() {
        
    }

    // function to filter out Writing componenets that do not include state string
    // when search bar empty, all are displayed

    return(
        <div className="flex flex-col items-center">
            <h1 className="m-10 text-6xl rothwood-bold py-8">Writing</h1>
            <FormControl className="flex flex-column sm:place-items-center md:justify-normal px-10 md:px-0 mb-7 w-full md:max-w-screen-sm">
                <Input className="border w-9/12 rothwood" placeholder="Search" />
            </FormControl>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-10 gap-5 lg:gap-16">
            <Writing
            writingTitle="Building a full-stack mobile app"
            writingDate="December 14th, 2024" />
            <Writing
            writingTitle="Attempting & failing my first startup"
            writingDate="December 14th, 2024" />
            <Writing
            writingTitle="Getting my first project deployed"
            writingDate="December 14th, 2024" />
            <Writing
            writingTitle="Collegiate Cup 2024: My best competition yet"
            writingDate="December 14th, 2024" />
            </div>
        </div>
    )
};

function Writing({writingTitle, writingDate}: WritingProps) {

    return(
        <div className="flex flex-col items-start">
            <h1 className="text-3xl rothwood-bold italic underline">{writingTitle}</h1>
            <h4 className="text-lg rothwood">Posted on {writingDate}</h4>
        </div>
    )
}