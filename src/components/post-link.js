import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={post.slug}>
      {!!post.featuredImage && (
        <img src={post.featuredImage.fluid.src} alt={post.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.slug} className="post-link">
          {post.title}
        </Link>
      </h2>
      <div className="post-meta">{post.date}</div>
    </header>
  </article>
)
export default PostLink
