"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const [count, setCount] = useState(0)
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li><Link href='/'>Home</Link>{path === '/' ? '🐬' : ''} </li>
                <li><Link href='/newpage'>Newpage</Link>{path === '/newpage' ? '🐬' : ''}</li>
                <li><button onClick={() => setCount(count + 1)}>{count}</button></li>
            </ul>
        </nav>
    )
}