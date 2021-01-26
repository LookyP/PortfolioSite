import React from "react"
import styles from "./article.module.css"
import { Link } from "gatsby"
import Img from "gatsby-image"

const article = props => (
  <div className={styles.postTile} key={props.key}>
    <div className={styles.postImageContainer}>
      <Link to={props.slug}>
        <Img className={styles.image} fluid={props.fluidImage}></Img>
        <div className={styles.postBodyContainer}>
          <div className={styles.postTitle}>{props.title}</div>
          <div className={styles.postDate}>{props.date}</div>
          <div className={styles.postExcerpt}>{props.excerpt}</div>
        </div>
      </Link>
    </div>
  </div>
)

export default article
