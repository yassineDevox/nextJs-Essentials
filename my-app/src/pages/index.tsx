import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import WithSeo from 'component/Seo'
import { seoHome } from 'constants/mets'
import { fetchStaticContent } from 'shared/apis/contentPage.api'
import { NAV_LINKS_MATCHES } from 'constants/pages'
import { HOME_CONTENT_PAGE_TYPE } from 'constants/commons'


const HomeContainer = dynamic(
  () => import('containers/Home'),
  { ssr: true }
)

const Home = ({ data }: any) => {

  return (
    <WithSeo meta={seoHome}>
      <HomeContainer data={data} />
    </WithSeo>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {

  const {data} = await fetchStaticContent({
    lang: locale,
    link: NAV_LINKS_MATCHES.HOME_PAGE,
    type: HOME_CONTENT_PAGE_TYPE
  })

  return {
    props: {
      data
    }
  }
}