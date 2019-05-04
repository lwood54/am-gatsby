module.exports = {
      siteMetadata: {
            title: "Logan's Gatsby Practice",
            author: "Logan Wood"
      },
      plugins: [
            `gatsby-plugin-sass`,
            {
                  resolve: "gatsby-source-filesystem",
                  options: {
                        name: "src",
                        path: `${__dirname}/src/`
                  }
            },
            "gatsby-transformer-remark"
      ]
};
