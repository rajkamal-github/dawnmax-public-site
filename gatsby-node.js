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

    // const res = await graphql(`
    //     query {
    //         allMarkdownRemark(sort: {fields: frontmatter___sequence}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}, frontmatter: {productType1: {ne: ""}}}) {
    //             edges {
    //               node {
    //                 fields {
    //                   slug
    //                 }
    //                 frontmatter {
    //                   productType1
    //                 }
    //               }
    //             }
    //         }
    //     }      
    // `);

    const res = await graphql(`
        query {
            allMarkdownRemark(sort: {fields: frontmatter___sequence}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}}) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      productType1
                    }
                  }
                }
            }
        }      
    `);

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        if (edge.node.frontmatter.productType1 !== ''){
            const postTemplate = path.resolve('./src/templates/product.js');
            createPage({
                component: postTemplate,
                path: `/products/${edge.node.frontmatter.productType1}/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            });
        }
        else{
            const postTemplate = path.resolve('./src/templates/products.js');
            createPage({
                component: postTemplate,
                path: `/products/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            });
        }
    });
}

// module.exports.createPages = async ( {graphql, actions}) => {
//     const { createPage } = actions

//     const postTemplate = path.resolve('./src/templates/products.js');

//     const res = await graphql(`
//         query {
//             allMarkdownRemark(filter: {frontmatter: {productType1: {eq: ""}, productType2: {eq: ""}}}) {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                         frontmatter {
//                             productType1
//                             productType2
//                         }
//                     }
//                 }
//             }
//         }      
//     `);

//     res.data.allMarkdownRemark.edges.forEach((edge) => {
//         createPage({
//             component: postTemplate,
//             path: `/productsfeatured/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         });
//     });
// }