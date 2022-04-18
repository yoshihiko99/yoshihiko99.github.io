import Link from 'next/link'
import React from "react";

type Props = {
    active?: boolean;
    children?: React.ReactNode;
    href: string;
    target?: string;
}

const NavLink: React.FC<Props> = ({active = false, children, href, target}) => (
    <Link href={href}>
        <a
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
                active
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            target={target}>
            {children}
        </a>
    </Link>
)

export default NavLink
