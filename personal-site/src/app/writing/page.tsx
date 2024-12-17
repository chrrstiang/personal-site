import Image from "next/image";

type WritingProps = {
    writingTitle: string,
    writingDate: string
}

export default function WritingContainer() {

    return(
        <div className="flex flex-col items-center">
            <h1 className="m-10 text-6xl rothwood-bold py-8">Writing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-5 gap-5 lg:gap-16">
            <Writing
            writingTitle="Getting my first project deployed"
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