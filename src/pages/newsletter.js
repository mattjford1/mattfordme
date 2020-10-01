import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import MailChimpForm from "../components/MailChimpForm"

const NewsletterPage = ({
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
        <div className="headline">Newsletter</div>
        <div className="primary-content"><br/>I occasionally compile interesting articles and share my thoughts on them.  Once in a blue moon, but what's the harm in joining the mailing list!</div> 
        <MailChimpForm />      
      </div>

    </Layout>
  )
}

export default NewsletterPage
export const pageQuery = graphql`
  query newsletterPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
