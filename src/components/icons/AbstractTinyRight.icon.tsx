import * as React from "react";

type IAbstractTinyRight = React.SVGAttributes<SVGElement>;

const AbstractTinyRight: React.FC<IAbstractTinyRight> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 93 575"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M155.227 9.17021C206.032 25.9663 212.317 140.146 237.995 214.264C253.461 258.904 268.07 299.956 273.502 350.565C280.639 417.049 302.189 497.106 273.54 545.4C244.883 593.708 196.235 549.472 155.227 549.941C113.655 550.417 67.4312 591.488 35.2592 548.127C2.22638 503.606 8.0641 420.848 7.29901 350.565C6.51292 278.353 5.40507 204.582 30.8794 145.791C60.9668 76.354 104.442 -7.61979 155.227 9.17021Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="13.8234"
      />
    </svg>
  );
};
export default AbstractTinyRight;
