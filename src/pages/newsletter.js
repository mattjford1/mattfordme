import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const NewsletterPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Newsletter — {site.siteMetadata.title}</title>
        <meta name="description" content={"Newsletter of " + site.siteMetadata.description} />
      </Helmet>

    </Layout>
  )
}
export default NewsletterPage
export const pageQuery = graphql`
  query NewsletterPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`