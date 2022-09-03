import React, { useEffect, useState } from "react";
import { PanResponder, View } from "react-native";
import Svg, { Path, Circle, G, Text } from "react-native-svg";

const CircularSlider = ({
  width,
  height,
  value,
  meterColor,
  textColor,
  onValueChange,
  handleScrolling,
}) => {
  const smallestSide = Math.min(width, height);

  const cx = width / 2;
  const cy = height / 2;
  const r = (smallestSide / 2) * 0.85;

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
        d={`M${polarToCartesian(0).x} ${polarToCartesian(0).y} A ${r} ${r} 0 ${
          value > 180 ? 1 : 0
        } 1 ${polarToCartesian(value).x} ${polarToCartesian(value).y}`}
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

export default CircularSlider;
