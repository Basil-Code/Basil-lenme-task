import React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronDownIcon = (props) => (
  <Svg width={11} height={6} fill="none" {...props}>
    <Path
      d="M10 1 5.5 5 1 1"
      stroke="#686666"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronDownIcon;
