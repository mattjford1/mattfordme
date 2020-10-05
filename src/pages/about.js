import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
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
      </div>

    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query aboutPageQuery {
    contentfulPageContent(id: {eq: "0cb4b56b-9b73-5cb5-b524-8fcea6e9796b"}) {
      title
      bodyContent {
        json
      }
    }
  }
`