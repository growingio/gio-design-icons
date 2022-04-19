# 如何贡献

## 目录结构

```
├── CONTRIBUTING.zh-CN.md
├── LICENSE
├── README.md
├── README.zh-CN.md
├── dist
├── es
├── node_modules
├── package.json
├── src
├── svgs
└── templates
```

- `svgs` 存放设计师提供的 svg 文件；
- `src` 把 svg 文件转成的 React 代码，并存放在 `src` 目录下；
- `es` tsc 编译 src 中的文件，生成 ES Modules 输出到 es 目录；
- `dist` 存放打包的 `css` 文件。

## 添加（更新）图标过程

1. 拿到设计师提供的 `svg` 文件后，检查命名是否规范；线框图标，后缀用 `-outlined`，填充的图标用 `-filled`；
2. 放在 `svgs` 目录下；
3. 运行 `yarn storybook` 预览 Icon。
