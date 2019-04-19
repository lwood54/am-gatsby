import React from "react"
import { Link } from "gatsby"

const Header = () => {
      return (
            <div>
                  <nav>
                        <ul>
                              <li>
                                    <Link to="/">Home</Link>
                              </li>
                              <li>
                                    <Link to="/contact">Contact</Link>
                              </li>
                              <li>
                                    <Link to="/blog">Blog</Link>
                              </li>
                              <li>
                                    <Link to="/about">About Me</Link>
                              </li>
                        </ul>
                  </nav>
            </div>
      )
}

export default Header
