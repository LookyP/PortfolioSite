import React from "react"
import { Helmet } from "react-helmet"
import styles from "./index.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"
import SectionTextRight from "../components/PageConstructors/sectionTextRight"
import SectionTextLeft from "../components/PageConstructors/sectionTextLeft"

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Helmet>
          <title>LP - Home</title>
        </Helmet>
        <div className={styles.container}>
          {/* 
        For email forms visit convertkit
        <Helmet>
          <script
            async
            data-uid="968998b2b8"
            src="https://tremendous-crafter-4152.ck.page/968998b2b8/index.js"
          ></script>
        </Helmet> */}

          <TitleArea
            body="CURIOSITY. PASSION. DETERMINATION."
            typewriter={["Lukman Patel", "Software Developer"]}
          />
          <SectionTextRight
            title="Software Developer With A Thirst For Improvement"
            text="As an introverted human being with a growth-mindset and a
          passion for what I do, I welcome and invite you to my site; a
          place where you can learn more about me."
            fluidImage={data.image1.childImageSharp.fluid}
            buttonText="READ MORE"
            buttonLink="/about"
            dark={true}
          />
          <SectionTextLeft
            title="Relax 'n' Read"
            text="Take a dive into my blog posts for some relaxing reads on the
                  topic of technology and other non-technology related subjects."
            fluidImage={data.image2.childImageSharp.fluid}
            buttonText="TAKE ME THERE"
            buttonLink="/about"
            dark={false}
          />
        </div>
      </Layout>
    </>
  )
}
export default IndexPage

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/about/skyline.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "images/landing/secondSection.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
