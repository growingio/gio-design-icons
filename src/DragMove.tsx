import * as React from "react";
import Wrapper from "./Wrapper";
import { IconProps } from "./interface";

function SvgDragMove(wrapperProps: IconProps) {
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
      viewBox="0 0 12 6"
      fill="currentColor"
      {...props}
    >
      <defs>
        <clipPath id="drag-move_svg__clip-path" transform="translate(0 -3)">
          <path fill="currentColor" d="M0 0h12v12H0z" />
        </clipPath>
        <style>{".drag-move_svg__cls-3{fill:#a3adc8}"}</style>
      </defs>
      <g>
        <g clipPath="url(#drag-move_svg__clip-path)">
          <circle
            className="drag-move_svg__cls-3"
            cx={1.13}
            cy={4.88}
            r={1.13}
          />
          <circle className="drag-move_svg__cls-3" cx={6} cy={4.88} r={1.13} />
          <circle
            className="drag-move_svg__cls-3"
            cx={10.88}
            cy={4.88}
            r={1.13}
          />
          <circle
            className="drag-move_svg__cls-3"
            cx={1.13}
            cy={1.13}
            r={1.13}
          />
          <circle className="drag-move_svg__cls-3" cx={6} cy={1.13} r={1.13} />
          <circle
            className="drag-move_svg__cls-3"
            cx={10.88}
            cy={1.13}
            r={1.13}
          />
        </g>
      </g>
    </svg>
  );
  return <Wrapper {...restProps} icon={file} />;
}

export default SvgDragMove;
