require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
module.exports = {
	siteMetadata: {
		title: `Restaurant Site`,
		description: `The Restaurant Site using Snipcart`,
		author: `@wazimuhb`,
		siteUrl: 'https://restaurant-ecommerce.netlify.app/',
		image: 'restaurant.png',
		twitterUsername: `@wazimuhb`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-snipcartv3',
			options: {
				apiKey: process.env.SNIPCART_API,
				autopop: true,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				typekit: {
					id: process.env.TYPEKIT_ID,
				},
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `restaurant-site-snipcart`,
				short_name: `restaurant`,
				start_url: `/`,
				background_color: `#663399`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/restaurant.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				host: `https://restaurant-ecommerce.netlify.app/`,
				sitemap: `https://restaurant-ecommerce.netlify.app/sitemap.xml`,
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `G-GR8X3CG2TD`,
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					'G-GR8X3CG2TD', // Google Analytics / GA
				],
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
				},
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
