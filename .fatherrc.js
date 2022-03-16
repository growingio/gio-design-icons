export default {
  cjs: 'babel',
  entry: 'src/index.ts',
  esm: 'babel',
  extractCSS: true,
  file: 'icons',
  lessInBabelMode: true,
  runtimeHelpers: true,
  umd: {
    globals: {
      react: 'React',
    },
    minFile: true,
    sourcemap: true,
  },
};
