import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex place-content-center w-screen">
      <div className="flex flex-col justify-evenly m-5 items-center lg:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="flex flex-col items-center md:m-10 md:justify-evenly md:flex-row-reverse w:1/2">
        <Image src='/images/my-headshot.webp' alt="headshot of christian garcia" width="350" height="500" />
        <h1 className="md:w-1/2 text-center text-4xl sm:text-5xl p-5 mb-5 aqva">My name is Christian Garcia</h1>
        </div>
        <ul className="w-1/2 grid grid-cols-1 sm:grid-cols-2 md:mt-10 text-center gap-9">
          <li className="text-2xl sm:text-3xl rothwood"><Link href="/about">about</Link></li>
          <li className="text-2xl sm:text-3xl rothwood"><Link href="/projects">projects</Link></li>
          <li className="text-2xl sm:text-3xl rothwood"><Link href="/writing">writing</Link></li>
          <li className="text-2xl sm:text-3xl rothwood"><Link href="/contact">contact</Link></li>
        </ul>
      </div>
      </div>
  );
}
