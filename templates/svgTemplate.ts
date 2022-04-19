const template = ({ imports, componentName, jsx, exports }, { tpl }) => {
  return tpl`
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
    <Wrapper {...restProps} svgName="${componentName}" icon={file} />
  );
}
${componentName}.displayName = '${componentName?.slice(3)}';

export const ${componentName.slice(3)}=${componentName};
${exports}
`
}

module.exports = template
