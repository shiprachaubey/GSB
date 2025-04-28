import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const TopRight = (props) => (
  <Svg
    width={211}
    height={144}
    viewBox="0 0 211 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_1_16)">
      <Path
        d="M240 17C240 82.7219 187.17 136 122 136C56.8304 136 4 82.7219 4 17C4 -48.7219 56.8304 -102 122 -102C187.17 -102 240 -48.7219 240 17ZM30.2151 17C30.2151 68.121 71.3086 109.563 122 109.563C172.691 109.563 213.785 68.121 213.785 17C213.785 -34.121 172.691 -75.5627 122 -75.5627C71.3086 -75.5627 30.2151 -34.121 30.2151 17Z"
        fill="#009990"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default TopRight;
