import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./blog.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"
import HorizontalSection from "../components/PageConstructors/horizontalBarSection"

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <>
      <Layout>
        <Helmet>
          <title>LP - Blog</title>
        </Helmet>
        <div className={styles.container}>
          <TitleArea
            body="Welcome to My Blog."
            typewriter={["Blog", "Read", "Sit Back", "Relax"]}
          />
        </div>
        <div className={styles.postSectionContainer}>
          <div className={styles.postContainer}>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className={styles.postTile} key={post.id}>
                    <div className={styles.postImageContainer}>
                      <Link to={post.frontmatter.slug}>
                        <Img
                          className={styles.image}
                          fluid={
                            post.frontmatter.featuredImage.childImageSharp.fluid
                          }
                        ></Img>
                        <div className={styles.postBodyContainer}>
                          <div className={styles.postTitle}>
                            {post.frontmatter.title}
                          </div>
                          <div className={styles.postDate}>
                            {post.frontmatter.date}
                          </div>
                          <p>{post.excerpt}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <HorizontalSection
          title="I Made This Site from Scratch..."
          text="That's right, no fancy drag-and-drop development platform, no templates, all authentic knowledge binded with inspiration from the best sources. 
          Everything you see before your eyes has been made with love and affection using GatsbyJS, a framework built upon the ever-popular ReactJS library. 
          To view the source code of this website, visit the GitHub repository."
          buttonText="TO REPOSITORY"
          dark={false}
        />
      </Layout>
    </>
  )
}

export default Blog

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
