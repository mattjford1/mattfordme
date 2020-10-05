import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default () => (
  <StaticQuery
    query={graphql`
    query HeadingQuery {
      contentfulPageContent(id: {eq: "d00adb99-cba5-5cb4-aee4-9b4baf6f1553"}) {
        title
        bodyContent {
          json
          }
        }
      }
    `}

    render={data => (
      <div className="hero-header">
        <div className="headline">{data.contentfulPageContent.title}</div>
        <div 
          className="primary-content"> 
          {documentToReactComponents(data.contentfulPageContent.bodyContent.json)}
        </div>
        <Link to='/about' className="button -primary">About me &rarr;</Link>
      </div>
    )}
  />
)