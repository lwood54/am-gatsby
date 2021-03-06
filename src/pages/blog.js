import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import cls from "./blog.module.scss";

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
                                    fields {
                                          slug
                                    }
                              }
                        }
                  }
            }
      `);
      let posts = data.allMarkdownRemark.edges.map(edge => {
            return (
                  <li key={edge.node.id} className={cls.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                              <h2>{edge.node.frontmatter.title}</h2>
                              <p>{edge.node.frontmatter.date}</p>
                        </Link>
                  </li>
            );
      });
      return (
            <Layout>
                  <h1>Tech Blog</h1>
                  <ol className={cls.posts}>{posts ? posts : null}</ol>
            </Layout>
      );
};

export default BlogPage;
