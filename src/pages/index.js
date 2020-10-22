import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./index.module.css"
import Layout from "../components/layout"
import SectionOneImage from "../images/landing/firstSection.jpg"
import Blog from "../images/landing/secondSection.jpg"
import TitleArea from "../components/PageConstructors/titleArea"
import DarkSection from "../components/PageConstructors/darkSection"

const IndexPage = () => (
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
          firstWord=""
          body="Curiosity. Passion. Determination."
          typewriter={["Lukman Patel", "Junior Software Developer"]}
        />
        <DarkSection
          title="Junior Developer With A Thirst For Improvement"
          text="As an introverted human being with a growth-mindset and a
          passion for what I do, I welcome and invite you to my site; a
          place where you can learn more about me."
          image={SectionOneImage}
          buttonText="READ MORE"
          buttonLink="/about"
          dark={true}
        />
        <div className={styles.containerTwo}>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={300}>
            <div className={styles.twoMain}>
              <div className={styles.twoBodyContainer}>
                <div className={styles.twoTitle}>Relax 'n' Read</div>
                <div className={styles.twoBody}>
                  Take a dive into my blog posts for some relaxing reads on the
                  topic of technology and other non-technology related subjects.
                </div>
                <Link to="/about" className={styles.twoButton}>
                  TAKE ME THERE &nbsp; &gt;
                </Link>
              </div>
              <div className={styles.twoImageContainer}>
                <img className={styles.twoImage} src={Blog}></img>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Layout>
  </>
)
export default IndexPage
