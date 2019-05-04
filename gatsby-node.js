const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
      const { createNodeField } = actions;

      if (node.internal.type === "MarkdownRemark") {
            // use path to access just the file name from the absolute path
            // use second argument to remove the file extension type
            // then we can use that to dynamically create new pages
            const slug = path.basename(node.fileAbsolutePath, ".md");

            createNodeField({
                  node,
                  name: "slug",
                  value: slug
            });
      }
};

module.exports.createPages = async ({ graphql, actions }) => {
      const { createPage } = actions;

      // get path to template
      const blogTemplate = path.resolve("./src/templates/blog.js");

      // get markdown data
      // this graphql is similar, but not the same as we used in our pages with useStaticQuery
      // here, graphql is a function that we pass the query to as a template string
      // this function returns a promise, so set up async/await
      const res = await graphql(`
            query {
                  allMarkdownRemark {
                        edges {
                              node {
                                    fields {
                                          slug
                                    }
                              }
                        }
                  }
            }
      `);

      // create new pages
      res.data.allMarkdownRemark.edges.forEach(edge => {
            createPage({
                  component: blogTemplate,
                  path: `/blog/${edge.node.fields.slug}`,
                  context: {
                        slug: edge.node.fields.slug
                  }
            });
      });
};
