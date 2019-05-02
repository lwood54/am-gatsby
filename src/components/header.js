import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import cls from "./header.module.scss";

const Header = () => {
      const data = useStaticQuery(graphql`
            query {
                  site {
                        siteMetadata {
                              title
                        }
                  }
            }
      `);
      return (
            <header className={cls.header}>
                  <h1>
                        <Link className={cls.title} to="/">
                              {data.site.siteMetadata.title}
                        </Link>
                  </h1>
                  <nav>
                        <ul className={cls.navList}>
                              <li>
                                    <Link
                                          to="/"
                                          className={cls.navItem}
                                          activeClassName={cls.activeNavItem}
                                    >
                                          Home
                                    </Link>
                              </li>
                              <li>
                                    <Link
                                          to="/contact"
                                          className={cls.navItem}
                                          activeClassName={cls.activeNavItem}
                                    >
                                          Contact
                                    </Link>
                              </li>
                              <li>
                                    <Link
                                          to="/blog"
                                          className={cls.navItem}
                                          activeClassName={cls.activeNavItem}
                                    >
                                          Blog
                                    </Link>
                              </li>
                              <li>
                                    <Link to="/about" className={cls.navItem}>
                                          About Me
                                    </Link>
                              </li>
                        </ul>
                  </nav>
            </header>
      );
};

export default Header;
