import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styles from "./blog.module.css"
import Layout from "../components/layout"
import HorizontalSection from "../components/PageConstructors/horizontalBarSection"
import Article from "../components/article"

const Blog = ({ data }) => {
  const allPosts = data.posts.edges
  const { edges: recommended } = data.recommended

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value

    const posts = data.posts.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <>
      <Layout>
        <Helmet>
          <title>LP - Blog</title>
        </Helmet>
        <div className={styles.container}>
          {/* <TitleArea
            body="Welcome to My Blog."
            typewriter={["Blog", "Read", "Sit Back", "Relax"]}
          /> */}
          <div className={styles.topSectionContainer}>
            <HorizontalSection
              title={"Kick Back and Relax"}
              text={"Lorem Ipsum Dolor Sit Amet"}
              useButton={false}
              // create useExternalLink prop for this for the GitHub repo link
              dark={false}
            />
          </div>
        </div>
        {recommended.map(({ node: post }) => {
          return (
            <HorizontalSection
              title={"Recommended Article: " + post.frontmatter.title}
              text={post.excerpt}
              buttonText="READ ARTICLE &nbsp; &gt;"
              buttonLink={post.fields.slug}
              fluidImage={post.frontmatter.featuredImage.childImageSharp.fluid}
              // create useExternalLink prop for this for the GitHub repo link
              dark={true}
            />
            /* F it, make a new recommended section component altogether just copying the sectionTextLeft code. Too diff to solve issue just for one section*/
          )
        })}

        <div className={styles.postSectionContainer}>
          <div className={styles.sectionBar}>
            <div className={styles.sectionTitle}>All Posts</div>
            <input
              className={styles.searchInput}
              type="text"
              aria-label="Search"
              placeholder="&#x1F50E;&#xFE0E; Type to filter posts..."
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.postContainer}>
            {posts.map(({ node }) => {
              const { excerpt } = node

              const { slug } = node.fields
              const { tags, title, date, description } = node.frontmatter
              return (
                <Article
                  key={node.id}
                  slug={slug}
                  fluidImage={
                    node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  title={title}
                  date={date}
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
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            slug
            description
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
          fields {
            slug
          }
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
  }
`
