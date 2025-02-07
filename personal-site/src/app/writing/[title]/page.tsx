'use client';
import { useRouter, useParams, usePathname } from "next/navigation";

export default function Piece() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    return (
        <div>
            <h1>Writing: {pathname}</h1>
            <p>So basically this is what the thing is going to look like</p>
        </div>
    );
}
