## to use GraphQL Playground

1. npm install --save-dev env-cmd
2. create file: .env.development in the root directory
3. change package.json:
      - scripts
           - WAS: "develop": "gatsby develop",
           - NOW: "develop": "env-cmd .env.development gatsby develop",
4. instead of running "gatsby develop", you need to run "npm run develop"
5. go to --> http://localhost:8000/___graphql

## To use Markdown Files

1. install gatsby-source-filesystem (to enable gatsby to access project file system)
2. update gatsby-config.js plugins
3. install gatsby-transformer-remark (to parse markdown files)
4. update gatsby-config.js plugins

## To dynamically generate pages

1. create gatsby-node.js file in root
2. export onCreateNode()
      - inside, check that internal node type is markdown (or whatever file type desired)
      - extract just the file name using the path.basename file.absolutePath
      - use that to as one of values for keys inside object argument for createNodeField()
3. create folder for templates to use
4. create template file that will be used to handle data collected from the created node that uses the slug
