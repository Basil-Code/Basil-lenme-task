import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const ArrowCircleIcon = (props) => (
  <Svg width={45} height={45} fill="none" {...props}>
    <Circle cx={22.5} cy={22.5} r={22.5} fill="#232323" />
    <Path
      d="m22.798 14.242 7.1 7.606-7.1 7.606M29.035 22H15.242"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowCircleIcon;
