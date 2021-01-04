import * as React from "react";
import Wrapper from "./Wrapper";
import { IconProps } from "./interface";

function SvgUserOutlined(wrapperProps: IconProps) {
  const { rotating, color, size, ...restProps } = wrapperProps;
  const props = {
    style: {
      color,
    },
    className: rotating ? "gio-icon-svg gio-icon-rotating" : "gio-icon-svg",
    width: !size ? "16px" : size,
    height: !size ? "16px" : size,
  };
  const file = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="currentColor"
      {...props}
    >
      <path
        d="M13 13.6s0-.1 0 0C12.8 10.4 10.2 8 7 8s-5.8 2.4-6 5.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c.2-2.6 1.8-4.8 4.1-5.8l.3-.3c0-.2 0-.3-.1-.4C3.5 6.1 3 5.1 3 4c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.1-.5 2.1-1.2 2.9-.1.1-.2.2-.2.4s.1.3.3.3c2.3 1 3.9 3.2 4.1 5.8v.1c0 .3-.2.5-.5.5s-.5-.2-.5-.4zM7 1c1.7 0 3 1.3 3 3S8.7 7 7 7 4 5.7 4 4s1.3-3 3-3z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
  return <Wrapper {...restProps} icon={file} />;
}

export default SvgUserOutlined;
