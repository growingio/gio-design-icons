import React from 'react';
import classNames from 'classnames';
import type { WrapperProps } from './interfaces';

import './Wrapper.less';

const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  const { icon, className, rotating, svgName, ...restProps } = props;
  const classString = classNames(
    'gio-icon',
    {
      ['gio-icon-rotating']: rotating,
    },
    className
  );
  const ariaLabel = svgName.slice(3).replace(/[A-Z]/g, (match) => (match ? `-${match.toLowerCase()}` : '')).slice(1);
  return (
    <span role="img" aria-label={ariaLabel} className={classString} {...restProps}>
      {icon}
    </span>
  );
};

export default Wrapper;
