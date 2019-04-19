import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
      return (
            <Layout>
                  <h1>Hello.</h1>
                  <h2>I'm Logan, a future web developer in Fort Worth, TX.</h2>
                  <h3>
                        Need a developer? <Link to="/contact">Contact</Link>
                  </h3>
            </Layout>
      )
}

export default IndexPage
