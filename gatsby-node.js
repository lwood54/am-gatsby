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
