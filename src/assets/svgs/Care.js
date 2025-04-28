import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Care = (props) => (
  <Svg
    width={400}
    height={300}
    viewBox="0 0 412 241"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_1_36)">
      <Path
        d="M411 29C411 141.666 318.771 233 205 233C91.2293 233 -1 141.666 -1 29C-1 -83.6661 91.2293 -175 205 -175C318.771 -175 411 -83.6661 411 29ZM36.6201 29C36.6201 121.091 112.006 195.745 205 195.745C297.994 195.745 373.38 121.091 373.38 29C373.38 -63.0908 297.994 -137.745 205 -137.745C112.006 -137.745 36.6201 -63.0908 36.6201 29Z"
        fill="#FFB22C"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default Care;
