require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Burak Saraloglu - Frontend Developer`,
    description: `Hello, I’m Burak, a front-end developer. 👋
                  I dedicate my time to develop products and create useful services
                  mostly built with React.`,
    author: `@buraksaraloglu`,
    siteUrl: "https://buraksaraloglu.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/fixtures`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `burak-saraloglu`,
        short_name: `buraksaraloglu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/main-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
          analytics: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
