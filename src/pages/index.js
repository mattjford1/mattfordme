import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
  data: {
    allContentfulBlogPost: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <HeroHeader/>
      <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
        allContentfulBlogPost(sort: {fields: date, order: DESC}) {
          edges {
            node {
              title
              id
              slug
              date (formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid {
                  src
                }
              }
            }
          }
        }

  }
`
