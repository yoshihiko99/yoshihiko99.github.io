import { useRouter } from 'next/router'
import React, { useState } from 'react'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink from '@/components/ResponsiveNavLink'
import Logo from '@/components/Logo'

type Props = {}

const Navigation: React.FC<Props> = () => {
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Navigation Links (PC) */}
          <div className="flex">
            <div className="hidden font-ubuntu space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <Logo />
              <NavLink href="/" active={router.pathname === '/'}>
                Home
              </NavLink>
              <NavLink href="#about-me">About Me</NavLink>
              <NavLink href="#works">Works</NavLink>
              <NavLink href="#my-skill-set">My Skill Set</NavLink>
              <NavLink href="#links">Links</NavLink>
              <NavLink
                href="https://github.com/yoshihiko99/yoshihiko99.github.io"
                target={'_blank'}>
                Source
              </NavLink>
            </div>
          </div>

          {/* Logo (mobile) */}
          <div className="justify-self-start flex items-center sm:hidden">
            <Logo />
          </div>

          {/* Hamburger (mobile) */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setOpen((open) => !open)}
              className="inline-flex border items-center justify-center p-2 rounded-md text-gray-400 text-gray-500 transition duration-150 ease-in-out">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                {open ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Navigation Menu (mobile) */}
      {open && (
        <div className="block sm:hidden">
          <div className="py-1 border-t border-gray-200">
            <div className="my-3 space-y-1">
              <ResponsiveNavLink href="/" active={router.pathname === '/'}>
                Home
              </ResponsiveNavLink>
              <ResponsiveNavLink
                href="/works"
                active={router.pathname === '/works'}>
                Works
              </ResponsiveNavLink>
              <ResponsiveNavLink
                href="https://github.com/yoshihiko99/yoshihiko99.github.io"
                target={'_blank'}>
                Source
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
