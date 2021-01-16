function template({ template }, opts, { imports, componentName, jsx, exports }) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins });
  return typeScriptTpl.ast`${imports}
import Wrapper from '../Wrapper';
import { IconProps } from '../interface';

function ${componentName}(wrapperProps: IconProps) {
  const { color, size, ...restProps } = wrapperProps;
  const props = {
    style: { 
      color
    },
    width: !size ? '16px' : size,
    height: !size ? '16px' : size,
  };
  const file = (
    ${jsx}
  );
  return (
    <Wrapper {...restProps} svgName="${opts.state.componentName}" icon={file} />
  );
}
${exports}
  `;
}

module.exports = template;
