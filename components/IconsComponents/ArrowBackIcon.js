import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowBackIcon = (props) => (
  <Svg width={11} height={19} fill="none" {...props}>
    <Path
      d="M8.53 17 2 9.5 8.53 2"
      stroke="#7659FB"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowBackIcon;
