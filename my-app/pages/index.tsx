import dynamic from 'next/dynamic'
import React from 'react'
import WithSeo from '../component/Seo'
import { seoHome } from '../constants/mets'


const HomeContainer = dynamic(
  () => import('../containers/Home'),
  { ssr: true }
)

const Home = () => {
  return (
    <WithSeo meta={seoHome}>
      <HomeContainer />
    </WithSeo>
  )
}

export default Home