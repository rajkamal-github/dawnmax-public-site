const path = require('path');

// Markdown config
module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions;

    if(node.internal.type==='MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md');
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ( {graphql, actions}) => {
    const { createPage } = actions

    const postTemplate = path.resolve('./src/templates/product.js');

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

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: postTemplate,
            path: `/products/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        });
    });

}