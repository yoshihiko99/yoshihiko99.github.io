import Link from 'next/link'
import React from "react";

type Props = {}

const NavLink: React.FC<Props> = () => (
    <Link href="/">
        <a className="font-logo inline-flex items-center px-1 pt-1 border-b-2 border-white border-opacity-0 text-3xl font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">
            Yuta Euchi
        </a>
    </Link>
)

export default NavLink
