import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=yes"
        />
        {props.headComponents}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          window.onscroll = function() {
          let currentScrollPos = window.pageYOffset;
            if (currentScrollPos == 0) {
              document.getElementById("header").style.backgroundColor = "white";
            } else {
              document.getElementById("header").style.backgroundColor = "rgba(67, 67, 67, 0.5)";
            }
            prevScrollpos = currentScrollPos;
          }
        `,
        }}
      /> */}
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
