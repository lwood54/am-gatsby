module.exports.onCreateNode = ({ node, actions }) => {
      const { createNodeField } = actions;

      if (node.internal.type === "MarkdownRemark") {
            console.log("markdown nodes: ", JSON.stringify(node, undefined, 4));
      }
};
