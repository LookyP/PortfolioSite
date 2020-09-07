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
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
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
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.onscroll = function() {
          let currentScrollPos = window.pageYOffset;
            if (currentScrollPos == 0) {
              document.getElementById("header").style.backgroundColor = "#1c1d21";
            } else {
              document.getElementById("header").style.backgroundColor = "rgb(0,0,0, 0.5)";
            }
            prevScrollpos = currentScrollPos;
          }
        `,
        }}
      />
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
