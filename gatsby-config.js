/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
            commonmark: true,
            footnotes: true,
            pedantic: true,
            gfm: true,
            plugins: [
              'gatsby-remark-relative-images',
              {
                resolve: 'gatsby-remark-images',
                options: {
                  maxWidth: 750,
                  linkImagesToOriginal: false
                }
              }
            ],
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-179425234-1",
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Delog GatbsyJS Starter`,
        short_name: `Delog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sg5rvwjajl1u`,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        downloadLocal: true,
        forceFullSync: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: process.env.MAILCHIMP_ENDPOINT,
            timeout: 3500,
          },
    },
    {
      resolve: `gatsby-plugin-metomic`,
      options: {
        clientId: process.env.METOMIC_CLIENT_ID,
      },
    },
    `@contentful/rich-text-react-renderer`,
    `@contentful/rich-text-types`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-sharp',
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-dark-mode',
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
