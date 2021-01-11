// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
  
//   const { createPage } = actions

//   return graphql(
//     `
//       {
//         allContentfulBlogPost(
//           sort: { fields: publishDate, order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               title
//               slug
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     const posts = result.data.allContentfulBlogPost.edges

//      posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node

//       createPage({
//         path: `/blog/post/${post.node.slug}`,
//         component: path.resolve("./src/layouts/blog-post-layout.jsx"),
//         context: {
//           slug: post.node.slug,
//           previous,
//           next,
//         },
//       })
//     })

//     const postsPerPage = 6
//     const numPages = Math.ceil(posts.length / postsPerPage)

//     Array.from({ length: numPages }).forEach((_, index) => {
//       createPage({
//         path: index === 0 ? `/blog` : `/blog/page/${index + 1}`,
//         component: path.resolve("./src/layouts/blog-layout-list.jsx"),
//         context: {
//           limit: postsPerPage,
//           skip: index * postsPerPage,
//           numPages,
//           currentPage: index + 1,
//         },
//       })
//     })
//   })
// }
