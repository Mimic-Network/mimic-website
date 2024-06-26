import * as React from "react";

type IAbstractRight = React.SVGAttributes<SVGElement>;

const AbstractRight: React.FC<IAbstractRight> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 410 594"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M341.818 -50.0753C423.831 -72.8396 524.792 -65.365 577.147 24.1523C628.176 111.4 572.725 235.058 573.99 346.891C575.297 462.349 644.589 598.825 584.568 679.806C524.499 760.852 425.452 674.25 341.818 660.138C275.268 648.908 207.352 659.273 152.257 606.861C85.2061 543.076 4.67241 458.283 12.5337 346.891C20.3168 236.605 125.032 205.956 185.713 132.803C239.146 68.3863 272.089 -30.7206 341.818 -50.0753Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="23"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M647.602 47.975C700.87 115.828 633.841 210.378 617.664 295.112C607.92 346.146 599.451 393.495 573.089 438.266C538.459 497.08 513.158 581.914 445.182 588.046C377.188 594.18 344.67 507.572 292.461 463.582C239.533 418.988 154.058 400.562 141.817 332.443C129.248 262.501 190.986 205.212 236.175 150.369C282.603 94.0206 329.65 36.1255 400.5 18.4926C484.181 -2.33349 594.352 -19.8534 647.602 47.975Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="23"
      />
    </svg>
  );
};
export default AbstractRight;
