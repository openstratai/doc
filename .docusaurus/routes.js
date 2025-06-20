import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/__docusaurus/debug',
    component: ComponentCreator('/en/__docusaurus/debug', '201'),
    exact: true
  },
  {
    path: '/en/__docusaurus/debug/config',
    component: ComponentCreator('/en/__docusaurus/debug/config', '326'),
    exact: true
  },
  {
    path: '/en/__docusaurus/debug/content',
    component: ComponentCreator('/en/__docusaurus/debug/content', 'b21'),
    exact: true
  },
  {
    path: '/en/__docusaurus/debug/globalData',
    component: ComponentCreator('/en/__docusaurus/debug/globalData', 'cfd'),
    exact: true
  },
  {
    path: '/en/__docusaurus/debug/metadata',
    component: ComponentCreator('/en/__docusaurus/debug/metadata', '297'),
    exact: true
  },
  {
    path: '/en/__docusaurus/debug/registry',
    component: ComponentCreator('/en/__docusaurus/debug/registry', '7f4'),
    exact: true
  },
  {
    path: '/en/__docusaurus/debug/routes',
    component: ComponentCreator('/en/__docusaurus/debug/routes', 'fdd'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', 'cb7'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', 'd67'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', 'e43'),
            routes: [
              {
                path: '/en/docs/basics/system-task',
                component: ComponentCreator('/en/docs/basics/system-task', '2c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/basics/technical-analysis',
                component: ComponentCreator('/en/docs/basics/technical-analysis', 'a6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', '6d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/more/contact',
                component: ComponentCreator('/en/docs/more/contact', '1ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/more/log',
                component: ComponentCreator('/en/docs/more/log', '32f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/more/question',
                component: ComponentCreator('/en/docs/more/question', '29f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial/create',
                component: ComponentCreator('/en/docs/tutorial/create', 'ccb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial/manage',
                component: ComponentCreator('/en/docs/tutorial/manage', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial/use',
                component: ComponentCreator('/en/docs/tutorial/use', '70b'),
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
    path: '/en/',
    component: ComponentCreator('/en/', '6c2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
