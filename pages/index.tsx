import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Terminal from '@/components/terminal-like'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yuta Euchi</title>
      </Head>

      <Navigation />

      <main className="container mx-auto max-w-5xl sm:w-3/5 p-3">
        <div className="my-3">
          <Terminal
            className="flex justify-center"
            lines={[
              { type: 'cmd', text: 'pwd' },
              { type: 'res', text: "Yuta Euchi's portfolio " },
              { type: 'cmd', text: 'ls' },
              {
                type: 'res',
                text: 'about-me\u2003works\u2003my-skill-set'
              },
              { type: 'cmd', text: 'cat about-me' }
            ]}
            canStart={true}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
