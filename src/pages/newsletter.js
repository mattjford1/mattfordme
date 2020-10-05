import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import EmailListForm from "../components/EmailListForm"

const NewsletterPage = ({
  data: {
    contentfulPageContent,
  },
}) => {

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      let url = node.data.target.fields.file['en-US'].url;
      return <img className="post-image" src={'https:' + url} alt=""/>
    }
  },
}

  return (
    <Layout>
      <div className="hero-header">
        <div className="headline">{contentfulPageContent.title}</div>
        <div className="primary-content">
          {documentToReactComponents(contentfulPageContent.bodyContent.json, options)}
        </div> 
        <EmailListForm />      
      </div>

    </Layout>
  )
}

export default NewsletterPage

export const pageQuery = graphql`
  query newsletterPageQuery {
    contentfulPageContent(id: {eq: "da4b8a72-9590-5481-8785-2577b1b086f0"}) {
      title
      bodyContent {
        json
      }
    }
  }
`