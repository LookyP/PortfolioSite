import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styles from "./blog.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"
import HorizontalSection from "../components/PageConstructors/horizontalBarSection"
import Article from "../components/article"

const Blog = ({ data }) => {
  const { edges: posts } = data.posts
  const { edges: recommended } = data.recommended
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
        {recommended.map(({ node: post }) => {
          return (
            <HorizontalSection
              title={"Recommended Article: " + post.frontmatter.title}
              text={post.excerpt}
              buttonText="READ ARTICLE"
              buttonLink={post.frontmatter.slug}
              fluidImage={post.frontmatter.featuredImage.childImageSharp.fluid}
              // create useExternalLink prop for this for the GitHub repo link
              dark={true}
            />
            /* F it, make a new recommended section component altogether just copying the sectionTextLeft code. Too diff to solve issue just for one section*/
          )
        })}
        <div className={styles.postSectionContainer}>
          <div className={styles.postContainer}>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <Article
                    key={post.id}
                    slug={post.frontmatter.slug}
                    fluidImage={
                      post.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.excerpt}
                  />
                )
              })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blog

export const pageQuery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
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
    }
    recommended: allMarkdownRemark(
      filter: { frontmatter: { recommended: { eq: "true" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
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
