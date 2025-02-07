import Image from "next/image";
import Link from "next/link";

type LinksProps ={
    iconLink: string
    altText: string
    linkHref: string
    appName: string
}

export default function Contact() {

    return(
        <div className="flex flex-col items-center">
            <h1 className="m-10 text-6xl aqva py-8 text-center">My Links</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Links
                iconLink="/images/ig-logo.webp"
                altText="Instagram Logo"
                linkHref="https://www.instagram.com/chrrstiang/"
                appName="Instagram" />
                <Links
                iconLink="/images/github-logo.webp"
                altText="Github Logo"
                linkHref="https://github.com/chrrstiang"
                appName="Github" />
                <Links
                iconLink="/images/linkedin-logo.webp"
                altText="LinkedIn Logo"
                linkHref="https://www.linkedin.com/in/christian-garcia-7992a5269/"
                appName="LinkedIn" />
                <Links
                iconLink="/images/email-logo.webp"
                altText="Email Logo"
                linkHref=""
                appName="Email" />
                <Links
                iconLink="/images/resume-logo.webp"
                altText="Resume Logo"
                linkHref=""
                appName="Resume" />
            </div>
        </div>
    )
};

function Links({iconLink, altText, linkHref, appName}: LinksProps) {
    return(
        <div className="flex flex-row items-center gap-3">
            <Image src={iconLink} alt={altText} width="30" height="30" />
            <Link href={linkHref}>
                <span className="text-3xl aqva italic">{appName}</span>
                </Link>
        </div>
    )
}