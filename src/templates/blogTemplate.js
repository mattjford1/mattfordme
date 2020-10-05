import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types'
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { contentfulBlogPost } = data

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
      <Helmet>
        <title>{contentfulBlogPost.title}</title>
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!contentfulBlogPost.featuredImage && (
            <div className="post-thumbnail">
              <h1 className="post-title">{contentfulBlogPost.title}</h1>
              <div className="post-meta">{contentfulBlogPost.date}</div>
            </div>
          )}
          {!!contentfulBlogPost.featuredImage && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${contentfulBlogPost.featuredImage.fluid.src})`}}>
              <h1 className="post-title">{contentfulBlogPost.title}</h1>
              <div className="post-meta">{contentfulBlogPost.date}</div>
            </div>
          )}
          <div
            className="blog-post-content">
            {documentToReactComponents(contentfulBlogPost.body.json, options)}
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "Do MMMM, YYYY")
      body {
        json
      }
      featuredImage {
        fluid {
          src
        }
      }
    }
  }
`