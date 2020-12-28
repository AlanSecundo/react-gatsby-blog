module.exports = {
  siteMetadata: {
    siteUrl: 'https://alansecundosite.gtsb.io/'
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
}
