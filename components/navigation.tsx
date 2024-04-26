"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li><Link href='/'>Home</Link>{path === '/' ? '🐬' : ''} </li>
                <li><Link href='/newpage'>Newpage</Link>{path === '/newpage' ? '🐬' : ''}</li>
                <li><Link href='/newpage/company'>Company</Link>{path === '/newpage/company' ? '🐬' : ''}</li>
            </ul>
        </nav>
    )
}