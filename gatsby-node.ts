import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/',
    toPath: '/home-a',
    statusCode: 200,
  })
}