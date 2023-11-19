import Logo from '~/components/elements/Logo'
import { IoMailOutline } from 'react-icons/io5/index.js'
import type { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className="dark:bg-trueGray-850 relative py-24 px-4">
      <span
        style={{ top: '-2rem' }}
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <Logo />
      </span>
      <div className="max-w-6xl mx-auto md:flex md:space-y-0 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-48">
        <div className="space-y-8 flex-1">
          <div className="mx-auto space-y-2">
            <h4 className="text-primary text-sm font-semibold tracking-wide">
              Get in touch
            </h4>
            <h1 className="text-4xl dark:text-white font-bold">
              {"Let's chat"}
            </h1>
          </div>
          <a
            className="block hover:outline-amber-400"
            href="mailto:christopher.k.gregory@gmail.com"
          >
            <div className="flex sm:space-x-4">
              <div className="hidden sm:flex items-center justify-center">
                <IoMailOutline className="text-4xl text-primary" />
              </div>
              <div>
                <h4 className="dark:text-trueGray-400 text-xs font-semibold tracking-wide">
                  Email me
                </h4>
                <h3 className="text-base sm:text-xl dark:text-white font-bold">
                  christopher.k.gregory@gmail.com
                </h3>
              </div>
            </div>
          </a>
          <div className="space-y-2 hidden">
            <label
              className="text-primary text-xs font-semibold tracking-wide"
              htmlFor="subscribe"
            >
              Subscribe to the newsletter
            </label>
            <input
              id="subscribe"
              type="subscribe"
              className="h-12 w-full dark:bg-trueGray-700 dark:text-white px-4"
              placeholder="Your email"
            />
            <div className="text-right">
              <button className="w-32 h-12 dark:bg-primary dark:text-white font-black tracking-wide hover:dark:bg-primaryDark">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-8 flex-1">
          <div className="mx-auto space-y-2">
            <h4 className="text-primary text-sm font-semibold tracking-wide">
              Need some help?
            </h4>
            <h1 className="text-4xl dark:text-white font-bold">
              {'Request a consultation'}
            </h1>
          </div>
          <div>
            <div className="space-y-2">
              <input
                id="name"
                type="name"
                className="h-12 w-full dark:bg-trueGray-700 dark:text-white px-4"
                placeholder="Your name"
              />
              <input
                id="email"
                type="email"
                className="h-12 w-full dark:bg-trueGray-700 dark:text-white px-4"
                placeholder="Your email"
              />
              <textarea
                className="min-h-24 h-48 w-full dark:bg-trueGray-700 dark:text-white p-4"
                placeholder="Short description of your problem or interest"
              />
            </div>
            <button className="mt-0.5 w-32 h-12 dark:bg-primary dark:text-white font-black tracking-wide hover:dark:bg-primaryDark">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
