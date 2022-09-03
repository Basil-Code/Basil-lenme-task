import React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";

const MainLogo = ({ imageColor, w, h }) => (
  <Svg width={w} height={h} fill="none">
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={w}
      height={h}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h30v30H0V0Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.966 29.998 8.48 29.767A8.64 8.64 0 0 1 0 20.966L.234 8.48a8.64 8.64 0 0 1 8.8-8.477L21.52.234a8.639 8.639 0 0 1 8.477 8.8l-.232 12.488a8.64 8.64 0 0 1-8.8 8.477"
        fill={imageColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.918 24.075a4.924 4.924 0 0 0 4.923-4.924V6.181a4.923 4.923 0 0 0-4.923 4.923v12.97ZM18.427 18.747a2.648 2.648 0 0 0-2.61 2.221l-.007-.006c-.333 1.646-1.336 2.49-1.336 2.49-.28.185-.152.618.182.617l3.771-.014a2.654 2.654 0 1 0 0-5.308"
      fill="#fff"
    />
  </Svg>
);

export default MainLogo;
