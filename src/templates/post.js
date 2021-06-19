import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./post.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
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
            <div className={styles.tags}></div>
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
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "Do MMMM, YYYY")
        slug
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
