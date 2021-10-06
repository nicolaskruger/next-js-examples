import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { serialiseRouteFrontend } from '../constants'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ul>
        {serialiseRouteFrontend().map((path, index) => (
          <li key={index}>
            <Link href={path} >
              <a href="">
                {path}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
