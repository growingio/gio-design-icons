const template = ({ imports, componentName, jsx, exports }, { tpl }) => {
  return tpl`
${imports}
import Wrapper from '../Wrapper';
import { IconProps } from '../interfaces';

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
    <Wrapper {...restProps} svgName="${componentName}" icon={file} />
  );
}
${exports}
`
}

module.exports = template
