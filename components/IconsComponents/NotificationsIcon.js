import React from "react";
import Svg, { G, Path } from "react-native-svg";

const NotificationsIcon = ({ w, h, imgColor }) => (
  <Svg width={w} height={h} fill="none">
    <G opacity={0.4} strokeWidth={1.5}>
      <Path
        clipRule="evenodd"
        d="M17.194 13.15v-4.8c0-3.535-2.008-5.6-5.444-5.6-3.437 0-5.445 2.065-5.445 5.6v4.8l-1.555 5.6h14l-1.556-5.6Z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.083 21.15c0 .884-1.044 1.6-2.333 1.6-1.289 0-2.333-.716-2.333-1.6"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={0.01}
        fill="#D8D8D8"
        stroke="#979797"
        d="M.75.75h22.5v22.5H.75z"
      />
    </G>
  </Svg>
);

export default NotificationsIcon;
