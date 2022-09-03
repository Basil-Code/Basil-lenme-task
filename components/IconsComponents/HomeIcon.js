import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ imageColor, w, h }) => (
  <Svg width={w} height={h} fill="none">
    <Path
      opacity={0.01}
      fill={imageColor}
      stroke={imageColor}
      strokeWidth={1.5}
      d="M.75.75h22.5v22.5H.75z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 7-8 6.28V23h16v-9.72L12 7Z"
      fill={imageColor}
      stroke={imageColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 10 12 2 2 10"
      stroke={imageColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
