import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `example-edge-fn`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true,
  },
  trailingSlash: "always",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  plugins: [],
}

export default config
