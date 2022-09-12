//   Arc Formula
// x = cx -rcostheta
// y= -rsintheta + cy
//   // A rx ry x-axis-rotation large-arc-flag sweep-flag x y

import React, { useEffect, useState } from "react";
import { PanResponder, View } from "react-native";
import Svg, { Path, Circle, G, Text } from "react-native-svg";

const ArcSlider = ({
  width,
  height,
  value,
  meterColor,
  textColor,
  onValueChange,
  handleScrolling,
}) => {
  const smallestSide = Math.min(width, height);

  //   const cx = width / 2;
  //   const cy = height / 2;
  //   const r = (smallestSide / 2) * 0.85;
  //   const { PI, cos, sin } = Math;
  //   const Angle = PI + PI * 0.4;
  //   const startAngle = 2 * PI - PI * 0.2;
  //   const endAngle = PI + PI * 0.2;
  const strokeWidth = 25;

  const { PI, cos, sin } = Math;
  const r = (width - 25) / 2;
  const cx = width / 2;
  const cy = height / 2;
  const A = PI + PI * 0.4;
  const startAngle = PI + PI * 0.2;
  const endAngle = 2 * PI - PI * 0.2;
  // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  const x1 = cx - r * cos(startAngle);
  const y1 = -r * sin(startAngle) + cy;
  const x2 = cx - r * cos(endAngle);
  const y2 = -r * sin(endAngle) + cy;
  const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

  const circumference = r * A;

  //   const r = (size - strokeWidth) / 2;
  //   const circumference = r * A;

  //   const [startCoord, setStartCoord] = useState(polarToCartesian(0));
  //   const [endCoord, setEndCoord] = useState(polarToCartesian(value));

  //   const [_panResponder, set_panResponder] = useState(
  //     PanResponder.create({
  //       onStartShouldSetPanResponder: () => true,
  //       onMoveShouldSetPanResponder: () => true,
  //       onPanResponderMove: this.handlePanResponderMove,
  //     })
  //   );
  const [panResponder, set_panResponder] = useState({});

  useEffect(() => {
    set_panResponder(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        // onPanResponderGrant: () => handleScrolling(false),
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderMove: handlePanResponderMove,
        onPanResponderStart: () => handleScrolling(false),
        onPanResponderEnd: (evt, gestureState) => handleScrolling(true),
        // Another component has become the responder, so this gesture
        // should be cancelled
      })
    );
  }, []);

  const polarToCartesian = (angle) => {
    let a = ((angle - 270) * Math.PI) / 180.0;
    let x = cx + r * Math.cos(a);
    let y = cy + r * Math.sin(a);
    return { x, y };
  };
  const cartesianToPolar = (x, y) => {
    return Math.round(
      Math.atan((y - cy) / (x - cx)) / (Math.PI / 180) + (x > cx ? 270 : 90)
    );
  };
  const handlePanResponderMove = ({
    nativeEvent: { locationX, locationY },
  }) => {
    onValueChange(cartesianToPolar(locationX, locationY));
  };

  return (
    <Svg width={width} height={height}>
      <Circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="#eee"
        strokeWidth={25}
        fill="none"
      />
      <Path
        stroke={meterColor}
        strokeWidth={25}
        fill="none"
        // d={`M${polarToCartesian(0).x} ${polarToCartesian(0).y} A ${r} ${r} 0 ${
        //   value > 180 ? 1 : 0
        // } 1 ${polarToCartesian(value).x} ${polarToCartesian(value).y}`}
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeWidth }}
      />
      <G
        x={polarToCartesian(value).x - 7.5}
        y={polarToCartesian(value).y - 7.5}
      >
        <Circle
          cx={7.5}
          cy={7.5}
          r={20}
          //   fill={meterColor}
          fill="white"
          {...panResponder.panHandlers}
        />
        {/* <Text
          key={value + ""}
          x={7.5}
          y={1}
          fontSize={10}
          fill={textColor}
          textAnchor="middle"
        >
          {value + ""}
        </Text> */}
      </G>
    </Svg>
  );
};

export default ArcSlider;
