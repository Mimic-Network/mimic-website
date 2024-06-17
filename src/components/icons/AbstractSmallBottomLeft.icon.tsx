import * as React from "react";

type IAbstractSmallBottomLeft = React.SVGAttributes<SVGElement>;

const AbstractSmallBottomLeft: React.FC<IAbstractSmallBottomLeft> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 358 387"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M124.764 14.1939C209.341 31.1734 219.805 146.6 262.553 221.527C288.299 266.655 312.62 308.155 321.664 359.317C333.545 426.527 369.421 507.458 321.726 556.279C274.019 605.114 193.033 560.395 124.764 560.87C55.5557 561.351 -21.3962 602.87 -74.955 559.036C-129.947 514.028 -120.229 430.367 -121.502 359.317C-122.811 286.316 -124.655 211.739 -82.2463 152.306C-32.1579 82.1113 40.2175 -2.77942 124.764 14.1939Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="23"
      />
    </svg>
  );
};
export default AbstractSmallBottomLeft;
