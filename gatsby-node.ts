import path from 'path'
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  // actions.createRedirect({
  //   fromPath: '/',
  //   toPath: '/home-a/',
  //   statusCode: 200
  // })
  // actions.createRedirect({
  //   fromPath: '/',
  //   toPath: '/home-b/',
  //   statusCode: 200
  // })

  actions.createPage({
    component: path.resolve('./src/templates/home-a.tsx'),
    path: '/home-a',
    matchPath: '/'
  })
  actions.createPage({
    component: path.resolve('./src/templates/home-b.tsx'),
    path: '/home-b',
    matchPath: '/'
  })
}

// export const onCreatePage: GatsbyNode['onCreatePage'] = async ({ page, actions }) => {
//   const { createPage } = actions

//   if (page.path.match(/\/home-a\/|\/home-b\//)) {
//     page.matchPath = "/?"
//     createPage(page)
//   }
// }