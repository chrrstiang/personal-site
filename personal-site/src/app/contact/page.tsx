import { Links } from "../components"

export default function Page() {

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
            </div>
        </div>
    )
};