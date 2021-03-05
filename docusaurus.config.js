module.exports = {
  title: 'Joint Docs',
  tagline: 'The tagline of my site',
  url: 'https://Sebery.github.io',
  baseUrl: '/Joint-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Sebery', // Usually your GitHub org/user name.
  projectName: 'Joint-Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'JOINT DOCUMENTATION',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Joint.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Sebery/Joint-Docs',
            routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
