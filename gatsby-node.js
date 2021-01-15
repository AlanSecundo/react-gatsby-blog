const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  
  const { createPage } = actions
  const postsPerPage = 6
  const PT_BR = "pt-BR"
  const EN_US = "en-US"

  return graphql(
    `
      {
        allContentfulBlogPost(
          sort: { fields: publishDate, order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              title
              slug
              node_locale
              contentful_id
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allContentfulBlogPost.edges

    const brPosts = posts.filter(el => el.node.node_locale === "pt-BR")

    const enPosts = posts.filter(el => el.node.node_locale === "en-US")

    const numPagesBr = Math.ceil(brPosts.length / postsPerPage)

    const numPagesEn = Math.ceil(enPosts.length / postsPerPage)

    function createListPage(index, pathLanguage, numPagesParam, language) {
      createPage({
        path: index === 0 ? pathLanguage : `${pathLanguage}/page/${index + 1}`,
        component: path.resolve("./src/layouts/blog-list-layout.jsx"),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages: numPagesParam,
          currentPage: index + 1,
          locale: language
        },
      })
    }

    Array.from({ length: numPagesBr }).forEach((_, index) => {
      createListPage(index, `/artigos`, numPagesBr, PT_BR)
    })

    Array.from({ length: numPagesEn }).forEach((_, index) => {
       createListPage(index, `/articles`, numPagesEn, EN_US)
    })


    function createArticlePage(slug, previous, next, language, contentfulId) {

      let pathByLanguage = language === PT_BR ? "/artigos" : "/articles"
      let reverseLocale = language === PT_BR ? "en-US" : "pt-BR"

      createPage({
        path: `${pathByLanguage}/post/${slug}`,
        component: path.resolve("./src/layouts/blog-post-layout.jsx"),
        context: {
          slug,
          previous,
          next,
          contentfulId,
          reverseLocale
        },
      })
    }


    brPosts.forEach((post, index) => {
      const previous = index === brPosts.length - 1 ? null : brPosts[index + 1].node
      const next = index === 0 ? null : brPosts[index - 1].node

      createArticlePage(post.node.slug, previous, next, PT_BR, post.node.contentful_id)
    })

    enPosts.forEach((post, index) => {
      const previous = index === enPosts.length - 1 ? null : enPosts[index + 1].node
      const next = index === 0 ? null : enPosts[index - 1].node

      createArticlePage(post.node.slug, previous, next, EN_US, post.node.contentful_id)
    })
  })
}
