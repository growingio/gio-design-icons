module.exports = {
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectDecorator: false,
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-toolbars',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../public'],
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
};
