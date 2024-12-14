import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">my name is christian garcia</h1>
      <div className="w-90">
        <ul className="flex flex-col justify-around w-100">
          <li><Link href="/about">about</Link></li>
          <li><Link href="/projects">projects</Link></li>
          <li><Link href="/writing">writing</Link></li>
          <li><Link href="/contact">contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
