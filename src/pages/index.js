import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"
import LandingLayout from "../components/landingLayout"
import AboutMe from "../components/aboutMe"

const IndexPage = () => (
  <>
    <LandingLayout />
    <AboutMe />
  </>
)
export default IndexPage
