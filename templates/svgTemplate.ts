function template(
  { template },
  opts,
  { imports, componentName, jsx, exports }
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`${imports}
import Wrapper from '../Wrapper';
import { IconProps } from '../interfaces';

function ${componentName}(wrapperProps: IconProps) {
  const { color, size, ...restProps } = wrapperProps;
  const props = {
    style: { 
      color
    },
    width: !size ? '1em' : size,
    height: !size ? '1em' : size,
  };
  const file = (
    ${jsx}
  );
  return (
    <Wrapper {...restProps} svgName="${opts.state.componentName}" icon={file} />
  );
}
${exports}
  `
}

module.exports = template
