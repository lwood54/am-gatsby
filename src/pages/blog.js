import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
      const data = useStaticQuery(graphql`
            query {
                  allMarkdownRemark {
                        edges {
                              node {
                                    id
                                    frontmatter {
                                          title
                                          date
                                    }
                                    html
                                    excerpt
                              }
                        }
                  }
            }
      `);
      let posts = data.allMarkdownRemark.edges.map(edge => {
            return (
                  <li key={edge.node.id}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                  </li>
            );
      });
      return (
            <Layout>
                  <h1>Tech Blog</h1>
                  <ol>{posts ? posts : null}</ol>
            </Layout>
      );
};

export default BlogPage;
