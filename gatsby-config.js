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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-6SPVG1BS56",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
