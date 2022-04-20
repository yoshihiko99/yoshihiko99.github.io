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

      <main>
        <div className="my-3">
          <Terminal
            lines={[
              { type: 'cmd', text: 'cat test' },
              { type: 'res', text: 'test message' },
              { type: 'cmd', text: 'cd' }
            ]}
            canStart={true}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
