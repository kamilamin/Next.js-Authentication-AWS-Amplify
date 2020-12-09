import '../styles/globals.css'
import Amplify from 'aws-amplify';
import Link from 'next/link'
import config from '../src/aws-exports';
import {css} from '@emotion/css'

Amplify.configure({
  ...config,
  ssr: true
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className={navStyle}>
        <Link href="/">
          <span className={linkStyle}>Home</span>
        </Link>
        <Link href="/profile">
          <span className={linkStyle}>Profile</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

const linkStyle = css`
  margin-right: 20px;
  cursor: pointer;
`

const navStyle = css`
  display: flex;
`
