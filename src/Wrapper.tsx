import React from 'react';
import classNames from 'classnames';
import { IconProps } from './interface';
import './Wrapper.less';

interface WrapperProps extends IconProps {
  svgName: string;
  icon: React.ReactNode;
}

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
