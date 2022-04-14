import React from 'react';
import type { WrapperProps } from './interfaces';

// import './Wrapper.css';

const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  const { icon, className, rotating, svgName, ...restProps } = props;
  const classNames = ['gio-icon'];
  if (rotating) {
    classNames.push('gio-icon-rotating')
  }
  if (className) {
    classNames.push(className);
  }
  const ariaLabel = svgName.slice(3).replace(/[A-Z]/g, (match) => (match ? `-${match.toLowerCase()}` : '')).slice(1);
  return (
    <span role="img" aria-label={ariaLabel} className={classNames.join(' ')} {...restProps}>
      {icon}
    </span>
  );
};

export default Wrapper;
