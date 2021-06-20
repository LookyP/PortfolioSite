import React from "react"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import styles from "./post.module.css"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const postTags = frontmatter.tags
  const postTagLinks = postTags.map((tag, key) => (
    <Link to={`/tags/${kebabCase(tag)}/`} className={styles.tagLink} key={key}>
      {tag}
    </Link>
  ))
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.postInfoContainer}>
          <div className={styles.imageContainer}>
            <Img
              className={styles.image}
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
            ></Img>
          </div>
          <div className={styles.postInfo}>
            <div className={styles.date}>{frontmatter.date}</div>
            <div className={styles.title}>{frontmatter.title}</div>
            <div className={styles.overview}>{frontmatter.description}</div>
            <div className={styles.tagsContainer}>{postTagLinks}</div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "Do MMMM, YYYY")
        slug
        tags
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 500, maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
