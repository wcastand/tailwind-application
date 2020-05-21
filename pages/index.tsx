import * as React from 'react'
import Head from 'next/head'
import { AiFillGithub } from 'react-icons/ai'
import { DiNpm } from 'react-icons/di'

const P: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => (
  <p className={`text-base color-gray-700 ${className}`} {...props}>
    {children}
  </p>
)

export default function Home() {
  return (
    <div className="container bg-gray-50 max-w-4xl min-h-screen text-center mx-auto grid jusify-center items-center p-12 lg:p-0">
      <Head>
        <title>Tailwind Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="-mt-12 text-left grid grid-cols-1 gap-4">
        <div>
          <h1 className="text-3xl color-gray-600">About me</h1>
          <ul className="flex flex-row items-center">
            <li className="mr-4 text-2xl">
              <a href="https://github.com/wcastand" title="github profile">
                <AiFillGithub />
              </a>
            </li>
            <li className="mr-4 text-4xl">
              <a href="https://www.npmjs.com/~wcastand" title="npm profile">
                <DiNpm />
              </a>
            </li>
          </ul>
        </div>
        <P>
          Hi, I'm William Castandet, to quickly present myself, I am a french
          developer of 28 years old. I currently live in London, UK but plan to
          move somewhere else as soon as the pandemic let me.
        </P>
        <P>
          I've been coding and programming for almost 10 years as a self-taught
          developer. I went to an university for a computer science diploma but
          then switch to a private school where i discovered about design and 3D
          (color theory/storyboarding/...) and also web but i didn't discover
          much on this one since i was already doing web for a few years on my
          own and in internships.
        </P>
        <P>
          I became really interested in JS/Node community and Open source pretty
          quickly and tried since then to find a way to make it part of my daily
          job, which proven to be complicated since most companies are not a fan
          of free work for others, but with time i always found a way to add
          some open source in my life and working at tailwind would be for me an
          accomplishment of what i've been trying to do since i started working.
        </P>
        <P>
          I've been using tailwind css/ui at my latest company and it allowed us
          to iterate really quickly on our NextJS app. the main pain point i had
          were no React component so i had to do them myself and no working
          tailwind macro with plugins and tailwind ui addon. So an official
          tailwind macro would be something i would love to work on if i was a
          part of tailwind :)
        </P>
        <P>
          About me, i spend most of my free time playing video games with my
          friends in France and watchning tv shows/movies or going to the
          cinema. Although i want to add more to this since i plan to work fully
          remote, i will need activities to meet people now :).
        </P>
        <P>
          I don't want to make this too long since i think a chat is the best
          way for us to get to know each other.
          <br />
          Thanks for taking the time to read and i hope to hear from you soon.
        </P>
        <P>Best regards, William</P>
      </main>
    </div>
  )
}
