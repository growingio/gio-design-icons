import * as React from "react";

export interface IconProps {
  /**
   * 设置图标的样式名
   */
  className?: string;
  /**
   * 设置图标的样式
   */
  style?: React.CSSProperties;
  /**
   * 是否有旋转动画
   */
  rotating?: boolean;
  /**
   * 图标颜色
   */
  color?: string;
  /**
   * 图标大小
   */
  size?: string;
  /**
   * 点击图标时的回调
   */
  onClick?: (event: React.MouseEvent) => void;
}

export interface WrapperProps extends IconProps {
  svgName: string;
  icon: React.ReactNode;
}
