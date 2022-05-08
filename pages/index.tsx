import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Terminal from '@/components/terminal-like'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import 'animate.css'
import Card from '@/components/Card'
import MiniCard from '@/components/MiniCard'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import ParticlesParams from '@/public/particlesjs-config.json'
import { Engine } from 'tsparticles-engine'

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
  const particlesInit = async (main: Engine) => {
    await loadFull(main)
  }

  return (
    <div>
      <Head>
        <title>Yuta Euchi</title>
      </Head>

      <Navigation />

      <main className="w-full">
        <Particles
          init={particlesInit}
          options={ParticlesParams as any}
          className="-z-10 absolute"
        />

        <div className="h-screen pb-16 flex items-center justify-center">
          <Terminal
            outerClassName="h-56 w-4/5 sm:w-2/3 lg:w-1/3 p-7 rounded bg-white"
            lineClassName=""
            lines={[
              { type: 'cmd', text: 'pwd' },
              { type: 'res', text: "Yuta Euchi's portfolio " },
              { type: 'cmd', text: 'ls' },
              {
                type: 'res',
                // text: 'about-me\u2003works\u2003my-skill-set\u2003Links'
                text: 'about-me\u2003works\u2003Links'
              },
              { type: 'cmd', text: 'view all' },
              { type: 'res', text: 'please scroll...' },
              { type: 'cmd', text: '' }
            ]}
            canStart={true}
          />
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-5xl sm:w-3/5 px-8">
            <div ref={refAboutMe} className="py-28">
              <a id="about-me">
                <h2 className="text-5xl mb-6 w-full">About Me</h2>
              </a>
              {inViewAboutMe && (
                <div className="animate__animated animate__fadeInUp w-full grid md:grid-cols-2">
                  <div className="my-auto">
                    <p>
                      東京工業大学大学院情報理工学院、現在修士一年。神奈川県出身のエンジニア。
                      大学3年の夏、スキルアップをするため東大発ベンチャー「株式会社Drafty」に所属する。
                      テックリードとしてエンジニアチームのリーダーに着任、メンバー7人を統率を任される。
                      2年間のインターン業務を経て、AWSクラウドサーバー構築、Webアプリケーション（フロントエンド・バックエンド）作成、社内用Pythonツールなど、幅広く開発業務を行う。
                    </p>
                    <a
                      href="https://github.com/yoshihiko99"
                      target="_blank"
                      rel="noopener noreferrer">
                      <div className="flex my-6 transform duration-200 hover:opacity-50">
                        <img
                          alt="github"
                          src="/GitHub-Mark-64px.png"
                          className="w-6 mr-2"
                        />
                        <p className="underline">@yoshihiko99</p>
                      </div>
                    </a>
                  </div>
                  <div className="pt-10 md:pl-10 md:pt-0 flex">
                    <img
                      className="rounded-full border-8 m-auto w-60 md:max-w-xs md:w-full"
                      src="/no_image.png"
                      alt="プロフィール画像"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="py-10">
              <a id="works">
                <h2 className="text-5xl mb-3 w-full">Works</h2>
              </a>

              <div ref={refWorksTeleLabo} className="mb-10">
                {inViewWorksTeleLabo && (
                  <div className="animate__animated animate__fadeInUp">
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
              </div>

              <div ref={refWorksMyNote} className="mb-10">
                {inViewWorksMyNote && (
                  <div className="animate__animated animate__fadeInUp">
                    <Card
                      ImageSrc="/no_image.png"
                      ImageAlt="MyNoteのイメージ"
                      leading="MyNote"
                      content="作成中..."
                      tags={[
                        'Next.js',
                        'React',
                        'Laravel',
                        'PHP',
                        'AWS',
                        'MySQL'
                      ]}
                      link="https://tele-labo.jp/"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* <div className="py-10"> */}
            {/*  <a id="my-skill-set"> */}
            {/*    <h2 className="text-5xl mb-3 w-full">My Skill Set</h2> */}
            {/*  </a> */}
            {/* </div> */}

            <div className="py-10">
              <a id="links" />
              <h2 className="text-5xl mb-3 w-full">Links</h2>
              <div className="mb-6">
                <MiniCard
                  title="【インタビュー】求人サイトの開発を行う東工大の学生エンジニア・餌打さんについて徹底取材！"
                  link="https://tele-labo.jp/article/interview/6152"
                />
              </div>
              <div className="mb-6">
                <MiniCard
                  title="【天才エンジニア？】餌打 優太さん | テックリードとして最強エンジニア組織を築く"
                  link="https://www.wantedly.com/companies/company_3769741/post_articles/381979"
                />
              </div>
              <div className="mb-6">
                <MiniCard
                  title="リモートワーカーのための求人メディア「テレラボ」を展開する株式会社Drafty、第三者割当増資により総額4500万円の資金調達を実施"
                  link="https://prtimes.jp/main/html/rd/p/000000004.000067180.html"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
