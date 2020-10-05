import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site,
  },
}) => {

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <script src="https://config.metomic.io/config.js?id=prj:5338d7ca-6d2a-41db-962d-53e4e0b2f6cf" crossorigin charset="utf-8"></script>
        <script src="https://consent-manager.metomic.io/embed.js" crossorigin charset="utf-8"></script>
      </Helmet>
      <div className="hero-header">
        <div className="headline">About me</div>
        <div className="primary-content"><br/>From strategy consulting, to entrepreneurship, to investing, there’s been a common thread across most of what I’ve been involved in: the intersect of technology and financial services. <br/><br/>It’s always fascinated me… <br/><br/>Financial services plays such a systemic role, yet is often monopolised by tired, outdated behemoths that either can’t change, or don’t have the right incentives to. Many of these institutions were founded more than a century ago, and despite huge technology spend, they still kind of look a lot like they always have (albeit a bit shinier and more ‘digital’). Pair that with rapid advancement across all areas of technology (AI, cloud, mobile, blockchain etc), changing consumer behaviours, and new innovative business models, and the scene is set for an exciting battle that’s barely even begun. <br/><br/>I’m excited about the big questions ahead, and I want to meet, support and spend time with those entrepreneurs equally motivated by the opportunities ahead.<br/>
        <br/>A few career highlights:<br/>
        <br/>2020: Partner, Mouro Capital<br/>
        2018-19: Chief Product Officer, Tandem Bank<br/>
        2015-18: CEO, Pariti (acquired by Tandem)<br/>
        2017-18: Head of Customer Acquisition, OnTrees (acquired by MoneySuperMarket)<br/>
        Before that: strategy consulting (Deloitte, Capgemini)</div>
      </div>

    </Layout>
  )
}

export default AboutPage
export const pageQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
