import React from "react";
import { Link } from "gatsby";

import cls from "./header.module.scss";

const Header = () => {
      return (
            <div>
                  <nav>
                        <h1>Logan Wood</h1>
                        <ul>
                              <li>
                                    <Link to="/" className={cls.link}>
                                          Home
                                    </Link>
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
      );
};

export default Header;
