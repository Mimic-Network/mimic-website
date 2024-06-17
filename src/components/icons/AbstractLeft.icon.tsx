import * as React from "react";

type IAbstractLeft = React.SVGAttributes<SVGElement>;

const AbstractLeft: React.FC<IAbstractLeft> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 332 591"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M98.7639 14.1939C183.341 31.1734 193.805 146.6 236.553 221.527C262.299 266.655 286.62 308.155 295.664 359.317C307.545 426.527 343.421 507.458 295.726 556.279C248.019 605.114 167.033 560.395 98.7639 560.87C29.5557 561.351 -47.3962 602.87 -100.955 559.036C-155.947 514.028 -146.229 430.367 -147.502 359.317C-148.811 286.316 -150.655 211.739 -108.246 152.306C-58.1579 82.1113 14.2175 -2.77942 98.7639 14.1939Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="23"
      />
    </svg>
  );
};
export default AbstractLeft;
