import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./index.module.css"
import Typewriter from "typewriter-effect"
import Placeholder from "../images/Profile2.jpg"
import Blog from "../images/Blog.jpg"
import ScrollAnimation from "react-animate-on-scroll"
import Background from "../components/background"
// import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Layout>
      <div className={styles.container}>
        <Background />
        {/* 
        For email forms visit convertkit
        <Helmet>
          <script
            async
            data-uid="968998b2b8"
            src="https://tremendous-crafter-4152.ck.page/968998b2b8/index.js"
          ></script>
        </Helmet> */}
        <div className={styles.containerOne}>
          <div className={styles.oneMain}>
            <div className={styles.oneTitle}>
              <Typewriter
                id="Hello"
                options={{
                  strings: ["Lukman Patel", "Junior Software Developer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: styles.mainTitle,
                }}
              />
            </div>

            <div className={styles.oneBody}>
              Curiosity. Passion. Determination.
            </div>
          </div>
        </div>
        <div className={styles.containerTwo}>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={300}>
            <div className={styles.twoMain}>
              <div className={styles.twoImageContainer}>
                <img className={styles.twoImage} src={Placeholder}></img>
              </div>

              <div className={styles.twoBodyContainer}>
                <div className={styles.twoTitle}>
                  Junior Developer With A Thirst For Improvement
                </div>
                <div className={styles.twoBody}>
                  As an introverted human being with a growth-mindset and a
                  passion for what I do, I welcome and invite you to my site; a
                  place where you can learn more about me.
                </div>
                <Link to="/about" className={styles.twoButton}>
                  READ MORE &nbsp; &gt;
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className={styles.containerThree}>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={300}>
            <div className={styles.threeMain}>
              <div className={styles.threeBodyContainer}>
                <div className={styles.threeTitle}>Relax 'n' Read</div>
                <div className={styles.threeBody}>
                  Take a dive into my blog posts for some relaxing reads on the
                  topic of technology and other non-technology related subjects.
                </div>
                <Link to="/about" className={styles.threeButton}>
                  TAKE ME THERE &nbsp; &gt;
                </Link>
              </div>
              <div className={styles.threeImageContainer}>
                <img className={styles.threeImage} src={Blog}></img>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Layout>
  </>
)
export default IndexPage
