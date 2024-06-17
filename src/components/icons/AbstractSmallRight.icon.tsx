import * as React from "react";

type IAbstractSmallRight = React.SVGAttributes<SVGElement>;

const AbstractSmallRight: React.FC<IAbstractSmallRight> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 297 591"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M258.764 14.1939C343.341 31.1734 353.805 146.6 396.553 221.527C422.299 266.655 446.62 308.155 455.664 359.317C467.545 426.527 503.421 507.458 455.726 556.279C408.019 605.114 327.033 560.395 258.764 560.87C189.556 561.351 112.604 602.87 59.045 559.036C4.05305 514.028 13.7715 430.367 12.4978 359.317C11.1891 286.316 9.34481 211.739 51.7537 152.306C101.842 82.1113 174.217 -2.77942 258.764 14.1939Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="23"
      />
    </svg>
  );
};
export default AbstractSmallRight;
