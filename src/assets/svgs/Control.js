import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Control = (props) => (
  <Svg
    width={304}
    height={304}
    viewBox="0 0 304 304"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_1_59)">
      <Path
        d="M300 148C300 229.738 233.738 296 152 296C70.2619 296 4 229.738 4 148C4 66.2619 70.2619 0 152 0C233.738 0 300 66.2619 300 148ZM22.8936 148C22.8936 219.303 80.6965 277.106 152 277.106C223.303 277.106 281.106 219.303 281.106 148C281.106 76.6965 223.303 18.8936 152 18.8936C80.6965 18.8936 22.8936 76.6965 22.8936 148Z"
        fill="#009990"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default Control;
