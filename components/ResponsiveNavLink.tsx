import Link from 'next/link'
import React from "react";

type ResponsiveNavLinkProps = {
    active?: boolean;
    children?: React.ReactNode;
    target?: string;
    href: string;
}

const ResponsiveNavLink: React.VFC<ResponsiveNavLinkProps> = ({active = false, children, href, target}) => (
    <Link href={href}>
        <a
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 ${
                active
                    ? 'border-gray-900 text-gray-600 bg-gray-300'
                    : 'border-transparent text-gray-600'
            }`}
            target={target}>
            {children}
        </a>
    </Link>
)

export default ResponsiveNavLink
