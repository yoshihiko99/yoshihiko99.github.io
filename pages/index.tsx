import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Terminal from '@/components/terminal-like'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import 'animate.css'

const Home: NextPage = () => {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
    triggerOnce: true
  })

  return (
    <div>
      <Head>
        <title>Yuta Euchi</title>
      </Head>

      <Navigation />

      <main className="container mx-auto max-w-5xl sm:w-3/5 px-3">
        <div className="h-screen pb-16 flex items-center justify-center">
          <Terminal
            outerClassName="w-full sm:w-2/3 lg:w-1/3"
            lineClassName=""
            lines={[
              { type: 'cmd', text: 'pwd' },
              { type: 'res', text: "Yuta Euchi's portfolio " },
              { type: 'cmd', text: 'ls' },
              {
                type: 'res',
                text: 'about-me\u2003works\u2003my-skill-set'
              },
              { type: 'cmd', text: 'cat about-me' },
              { type: 'res', text: 'please scroll' }
            ]}
            canStart={true}
          />
        </div>
        <div ref={ref} className="h-screen flex">
          {inView && (
            <div className="animate__animated animate__fadeInUp w-full bg-blue-900"></div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
