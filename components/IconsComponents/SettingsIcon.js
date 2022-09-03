import React from "react";
import Svg, { G, Path } from "react-native-svg";

const SettingsIcon = ({ w, h, imgColor }) => (
  <Svg width={w} height={h} fill="none">
    <G opacity={0.4} strokeWidth={1.5}>
      <Path
        opacity={0.01}
        // fill="#D8D8D8"
        fill={imgColor}
        stroke="#979797"
        d="M.75.75h22.5v22.5H.75z"
      />
      <Path
        d="M10 5h12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M6 5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 6 5Z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 12h12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M6 12a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 6 12Z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 19h12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M6 19a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 6 19Z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default SettingsIcon;
