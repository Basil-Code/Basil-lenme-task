import React from "react";
import Svg, { G, Path } from "react-native-svg";

const AddNewIcon = ({ w, h, imgColor, stroke }) => (
  <Svg width={w} height={h} fill="none">
    <G opacity={0.4} strokeWidth={1.5}>
      <Path
        opacity={0.01}
        fill={imgColor}
        stroke={stroke}
        d="M.75.75h22.5v22.5H.75z"
      />
      <Path
        d="M13.75 3.75h-10v20h16v-14M6.75 7.35h10M6.75 11.35h6M6.75 15.35h8M6.75 19.35h4M17.5 3.75h5M20 6V1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default AddNewIcon;
