const path = require('path');
const { createFilePath } = require("gatsby-source-filesystem")

// Markdown config
module.exports.onCreateNode = ({ node, actions, getNode}) => {
    const { createNodeField } = actions;
    
    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode });
        createNodeField({
            // Name of the field you are adding
            name: "slug",
            // Individual MDX node
            node,
            // Generated value based on filepath with "blog" prefix. you
            // don't need a separating "/" before the value because
            // createFilePath returns a path with the leading "/".
            value: `${value}`,
        });
    }
}

module.exports.createPages = async ( {graphql, actions}) => {
    const { createPage } = actions    

    const res = await graphql(`
        query {
            allMdx {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                    frontmatter {
                      productType1
                      featured
                      title
                    }
                  }
                }
            }
        }      
    `);

    const posts = res.data.allMdx.edges.filter(x => x.node.fields.slug.indexOf('/brands/') == -1);   
    
    posts.forEach( ({ node } , index) => {  
        
        if (node.frontmatter.featured === "true"){
            createPage({
                // This is the slug you created before
                // (or `node.frontmatter.slug`)
                path: node.fields.slug,
                // This component will wrap our MDX content
                component: path.resolve(`./src/templates/products.js`),
                // You can use the values in this context in
                // our page layout component
                context: { slug: node.frontmatter.title },
            });
        }
        else{
            createPage({
                // This is the slug you created before
                // (or `node.frontmatter.slug`)
                path: node.fields.slug,
                // This component will wrap our MDX content
                component: path.resolve(`./src/templates/product.js`),
                // You can use the values in this context in
                // our page layout component
                context: { id: node.id },
            });
        }
    });
}