import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Terminal from '@/components/terminal-like'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import 'animate.css'
import Card from '@/components/Card'

const Home: NextPage = () => {
  const [refAboutMe, inViewAboutMe] = useInView({
    rootMargin: '-100px',
    triggerOnce: true
  })
  const [refWorksTeleLabo, inViewWorksTeleLabo] = useInView({
    rootMargin: '-100px',
    triggerOnce: true
  })
  const [refWorksMyNote, inViewWorksMyNote] = useInView({
    rootMargin: '-100px',
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
                text: 'about-me\u2003works\u2003my-skill-set\u2003follow-me'
              },
              { type: 'cmd', text: 'view all' },
              { type: 'res', text: 'please scroll' }
            ]}
            canStart={true}
          />
        </div>

        <div ref={refAboutMe} className="py-28">
          <h2 className="text-5xl mb-6 w-full">About Me</h2>
          {inViewAboutMe && (
            <div className="animate__animated animate__fadeInUp w-full grid md:grid-cols-2">
              <div className="my-auto">
                <p>
                  東京工業大学大学院情報理工学院、現在修士一年。神奈川県出身のエンジニア。
                  大学3年の夏、スキルアップをするため東大発ベンチャー「株式会社Drafty」に所属する。
                  テックリードとしてエンジニアチームのリーダーを就任、メンバー7人を統率する。
                  2年間のインターン業務を経て、AWSクラウドサーバー構築、Webアプリケーション（フロントエンド・バックエンド）作成、社内用Pythonツールなど、幅広く開発業務を行う。
                </p>
              </div>
              <div className="pt-10 md:pl-10 md:pt-0">
                <img
                  className="rounded-full border-8 m-auto md:max-w-xs w-80"
                  src="/no_image.png"
                  alt="プロフィール画像"
                />
              </div>
            </div>
          )}
        </div>

        <div ref={refWorksTeleLabo} className="py-10">
          <h2 className="text-5xl mb-3 w-full">Works</h2>
          {inViewWorksTeleLabo && (
            <div className="animate__animated animate__fadeInUp mb-10">
              <Card
                ImageSrc="/tele_labo_image.jpeg"
                ImageAlt="テレラボのイメージ"
                leading="テレラボ"
                content="リモートワークや在宅勤務など、新しい働き方に特化した求人サイト。
                10ヶ月にして月間10万PV、累計55万PVを達成、求人掲載企業数も35社を超え、総額4500万円の資金調達も達成しました。
                業界最大級の規模のリモートワーク特化メディアとなっています。
                本プロダクトには、株式会社Draftyのエンジニアトップとして、インフラからバックエンド、フロントサイドまで幅広く担当しました。
                "
                tags={['Laravel', 'PHP', 'JavaScript', 'AWS', 'MySQL']}
                link="https://tele-labo.jp/"
              />
            </div>
          )}

          <div ref={refWorksMyNote} className="mb-10">
            {inViewWorksMyNote && (
              <div className="animate__animated animate__fadeInUp mb-10">
                <Card
                  ImageSrc="/no_image.png"
                  ImageAlt="MyNoteのイメージ"
                  leading="MyNote"
                  content="作成中..."
                  tags={['Next.js', 'React', 'Laravel', 'PHP', 'AWS', 'MySQL']}
                  link="https://tele-labo.jp/"
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
