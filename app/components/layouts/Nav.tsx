import type { FC } from 'react'
import { useState } from 'react'
import MenuButton from '~/components/elements/MenuButton'
import Logo from '~/components/elements/Logo'
import cx from 'clsx'
import { Link } from '@remix-run/react'

const Nav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <div>
        <div className="max-w-5xl mx-auto w-100 px-4 md:px-2 h-28 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex-grow flex justify-center md:pr-24">
            <ul className="hidden md:flex items-center space-x-12 text-sm tracking-wide dark:text-trueGray-200">
              {menuItems.map((item) => (
                <Link key={item.title} to={item.href}>
                  <a className="growing-underline hover:dark:text-white">
                    <li>{item.title}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
            <MenuButton
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      <MobileNavPopup isOpen={isMenuOpen} />
    </>
  )
}

export default Nav

const MobileNavPopup = ({
  isOpen,
}: {
  isOpen: boolean
}) => {
  return (
    <div
      style={{
        height: 'calc(100vh - 7rem)',
      }}
      className={cx(
        'md:hidden transition-all ease-in-out w-full',
        isOpen ? 'block' : 'hidden',
      )}
    >
      <ul className="flex flex-grow flex-col text-sm dark:text-trueGray-200 h-full">
        {menuItems.map((item, index) => (
          <Link
            key={item.title}
            className={cx(
              'text-lg flex-1 max-h-20 w-full pl-12 border-t dark:border-trueGray-700 flex items-center hover:dark:bg-trueGray-750',
              {
                'border-b': index === menuItems.length - 1,
              },
            )}
            to={item.href}
          >
            <a>
              <li>
                <div className="h-full w-full">
                  {item.title}
                </div>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  )
}

const menuItems = [
  { title: 'Home', href: '/' },
  // { title: 'About', href: 'about' },
  // { title: 'Contact', href: 'contact' },
]
