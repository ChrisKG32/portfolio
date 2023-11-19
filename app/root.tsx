import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import Nav from '~/components/layouts/Nav'
import styles from './tailwind.css'
import Footer from '~/components/layouts/Footer'
import Hero from '~/components/layouts/Hero'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col dark:bg-neutral-850">
        <Nav />
        <Hero />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// import { FC } from 'react'
// import { Outlet } from 'remix'
// import NavClient from '~/components/layouts/Nav'
// import Footer from '~/components/layouts/Footer'
//
// const RootLayout: FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col dark:bg-trueGray-850">
//       <NavClient />
//       <Outlet />
//       <Footer />
//     </div>
//   )
// }
//
// export default RootLayout
