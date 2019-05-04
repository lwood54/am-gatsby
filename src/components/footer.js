import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import cls from "./footer.module.scss";

const Footer = props => {
      const data = useStaticQuery(graphql`
            query {
                  site {
                        siteMetadata {
                              author
                        }
                  }
            }
      `);
      return (
            <footer className={cls.footer}>
                  <p>Created by {data.site.siteMetadata.author}, © 2019</p>
            </footer>
      );
};

export default Footer;
