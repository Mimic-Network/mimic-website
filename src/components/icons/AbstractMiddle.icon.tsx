import * as React from "react";

type IAbstractMiddle = React.SVGAttributes<SVGElement>;

const AbstractMiddle: React.FC<IAbstractMiddle> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 604 594"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M265.069 -94.2083C344.466 -66.1654 358.12 106.907 414.894 202.513C470.323 295.852 570.833 321.711 587.792 449.241C606.337 588.693 561.214 735.066 498.916 834.335C437.494 932.207 348.243 995.879 265.069 963.483C190.397 934.398 165.108 790.039 120.683 687.012C87.8199 610.8 56.1581 540.295 43.3278 449.241C25.1671 320.36 -11.3816 177.598 33.4267 67.7798C82.0634 -51.4205 179.801 -124.324 265.069 -94.2083Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="23"
      />
    </svg>
  );
};
export default AbstractMiddle;
