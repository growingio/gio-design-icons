import * as React from "react";
import Wrapper from "./Wrapper";
import { IconProps } from "./interface";

function SvgUserTieOutlined(wrapperProps: IconProps) {
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
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      fill="currentColor"
      {...props}
    >
      <path
        d="M15.825 13.356c-.28-1.107-1.873-2.427-2.314-2.759-.445-.333-1.266-.132-1.903-.202-.639-.067-1.094-.847-1.175-.99-.083-.143-.086-.688-.075-.775.013-.086.118-.272.118-.272.438-.506.935-1.75.935-1.75.893-1.16.104-1.836.104-1.836.031-.158.097-1.583.041-1.91-.057-.326-.104-1.022-.856-1.924C9.947.035 8.572 0 8.572 0H7.429S6.054.037 5.302.939c-.752.901-.799 1.597-.857 1.925-.056.325.013 1.75.044 1.91 0 0-.788.675.102 1.835 0 0 .499 1.244.934 1.751 0 0 .106.185.118.272.012.088.009.632-.074.774-.082.143-.536.923-1.175.99-.639.07-1.459-.13-1.904.202-.444.332-2.035 1.652-2.314 2.759-.281 1.11-.342 2.344.716 2.643h14.213c1.063-.3.999-1.534.72-2.644zm-1.16 1.536c-.477.117-6.032.115-6.665.101-.632.014-6.187.016-6.666-.101-.507-.124-.315-.593-.205-1.264.111-.673 1.301-1.764 1.777-2.062.476-.295.618-.17 1.858-.343 1.237-.17 1.728-1.294 1.866-1.699.137-.407.057-1.385-.054-1.49-.11-.106-.57-.89-.617-1.019a26.534 26.534 0 00-.262-.615c-.731-.842-.341-1.239-.278-1.28.063-.043.074-.325.063-.865-.01-.541-.073-.822.127-1.914C5.811 1.249 7.578 1 7.578 1h.843s1.767.25 1.969 1.341c.2 1.092.136 1.373.124 1.914-.009.54 0 .821.064.864.066.042.454.438-.275 1.281 0 0-.214.486-.262.616-.047.128-.509.912-.618 1.017-.112.106-.19 1.084-.054 1.491.137.406.629 1.528 1.87 1.699 1.236.172 1.379.048 1.855.343.477.298 1.668 1.389 1.778 2.062.11.671.3 1.14-.207 1.264z"
        fill="currentColor"
      />
      <path
        d="M8.129 10.437h-.263a.162.162 0 01-.143-.097L7.5 9.903c0-.19.112-.34.313-.34h.368c.202 0 .319.152.319.34l-.228.439a.164.164 0 01-.143.095zM8.882 13.528l-.713.424a.357.357 0 01-.36-.001l-.693-.422c-.089-.054-.131-.143-.111-.23l.494-2.106c.026-.112.15-.193.294-.193h.44c.145 0 .268.083.295.195l.467 2.104c.021.087-.024.176-.113.229z"
        fill="currentColor"
      />
    </svg>
  );
  return <Wrapper {...restProps} icon={file} />;
}

export default SvgUserTieOutlined;
