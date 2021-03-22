module.exports = {
  dimensions: false,
  expandProps: 'end',
  semi: true,
  typescript: true,
  indexTemplate: (filePaths) => {
    const exportEntries = filePaths.map((filePath) => {
      const files = filePath.split('/');
      const basename = files[files.length - 1].split('.')[0];
      return `export { default as ${basename} } from './${basename}';`;
    });
    exportEntries.push("export { IconProps } from '../interface';");
    return `${exportEntries.join('\n')}\n`;
  },
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['svg', 'g', 'rect'],
            attributes: ['className', 'id', 'fill', 'data-name'],
          },
        ],
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['svg', 'path', 'rect'],
            attributes: [
              {
                name: 'fill',
                value: 'currentColor',
              },
            ],
          },
        ],
      ],
    },
  },
};
