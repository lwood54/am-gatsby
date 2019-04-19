import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
      return (
            <Layout>
                  <h1>Logan Wood</h1>
                  <h2>Role: Web Developer</h2>
                  <h2>email: lwood3499@gmail.com</h2>
                  <h2>
                        Portfolio:{" "}
                        <a
                              href="https://logan-wood-portfolio.herokuapp.com"
                              target="blank"
                        >
                              Logan Wood
                        </a>
                  </h2>
                  <h2>
                        GitHub:{" "}
                        <a href="https://www.github.com/lwood54" target="blank">
                              github/lwood54
                        </a>
                  </h2>
                  <h2>
                        Twitter:{" "}
                        <a href="https://twitter.com/lwood54" target="blank">
                              twitter/lwood54
                        </a>
                  </h2>
            </Layout>
      )
}

export default ContactPage
