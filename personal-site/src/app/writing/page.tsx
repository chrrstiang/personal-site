import Image from "next/image";

type WritingProps = {
    writingTitle: string,
    writingDate: string
}

export default function WritingContainer() {

    // Logic to make search bar work
    // When typing in search bar, only items that have those letters in the same order anywhere
    // in the title will show

    return(
        <div className="flex flex-col items-center">
            <h1 className="m-10 text-6xl rothwood-bold py-8">Writing</h1>
            <form className="flex flex-row justify-center md:justify-normal px-10 md:px-0 mb-7 w-full md:max-w-screen-sm h-8">
                <input className="border w-9/12 rothwood"
                type="text" placeholder="Search" />
                <button className="w-3/12 border rothwood" type="button">Search</button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-10 gap-5 lg:gap-16">
            <Writing
            writingTitle="Getting my first project deploy"
            writingDate="December 14th, 2024" />
            <Writing
            writingTitle="Getting my first project deployed"
            writingDate="December 14th, 2024" />
            <Writing
            writingTitle="Getting my first project deployed"
            writingDate="December 14th, 2024" />
            <Writing
            writingTitle="Getting my first project deployed"
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