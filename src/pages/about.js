import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
      return (
            <Layout>
                  <h1>About Me</h1>
                  <h3>
                        I'm Logan Wood and I've been coding for a few years now
                        and I'm currently working on get my first Front End
                        Developer job.
                  </h3>
                  <h3>
                        Need a developer? <Link to="/contact">Contact</Link>
                  </h3>
            </Layout>
      )
}

export default AboutPage
