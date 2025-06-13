import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0ec'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '350'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4ed'),
            routes: [
              {
                path: '/docs/basics/congratulations',
                component: ComponentCreator('/docs/basics/congratulations', 'f71'),
                exact: true
              },
              {
                path: '/docs/basics/create-a-blog-post',
                component: ComponentCreator('/docs/basics/create-a-blog-post', '5ad'),
                exact: true
              },
              {
                path: '/docs/basics/create-a-document',
                component: ComponentCreator('/docs/basics/create-a-document', '6ef'),
                exact: true
              },
              {
                path: '/docs/basics/create-a-page',
                component: ComponentCreator('/docs/basics/create-a-page', '2b9'),
                exact: true
              },
              {
                path: '/docs/basics/deploy-your-site',
                component: ComponentCreator('/docs/basics/deploy-your-site', '32b'),
                exact: true
              },
              {
                path: '/docs/basics/markdown-features',
                component: ComponentCreator('/docs/basics/markdown-features', 'ab4'),
                exact: true
              },
              {
                path: '/docs/basics/system-task',
                component: ComponentCreator('/docs/basics/system-task', 'ba8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/basics/technical-analysis',
                component: ComponentCreator('/docs/basics/technical-analysis', '95b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/more/contact',
                component: ComponentCreator('/docs/more/contact', 'dc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/more/log',
                component: ComponentCreator('/docs/more/log', '871'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/more/question',
                component: ComponentCreator('/docs/more/question', 'bfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/create',
                component: ComponentCreator('/docs/tutorial/create', '6b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/manage',
                component: ComponentCreator('/docs/tutorial/manage', 'd7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/use',
                component: ComponentCreator('/docs/tutorial/use', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
