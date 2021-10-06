import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Container, LayoutComponet, Preview } from '../components'
import { Banner } from '../components'
import { getAllPost } from '../lib'
import styles from '../styles/Home.module.css'
import { Post } from '../types'


type Props = {
  posts: Post[]
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
`;

const Home: NextPage<Props> = ({ posts }) => {

  const banner = posts[0];

  const other = posts.slice(1);

  return (
    <LayoutComponet>
      <Head>
        <title>
          home page
        </title>
      </Head>
      <Container>
        <Div>
          <Banner post={banner} />
          <Preview posts={other} />
        </Div>
      </Container>
    </LayoutComponet>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const posts = getAllPost();

  return {
    props: {
      posts
    }
  }
}