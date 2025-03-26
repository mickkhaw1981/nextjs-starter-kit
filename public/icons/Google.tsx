import React from "react";

interface GoogleIconProps extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export function GoogleIcon({
  size = 20,
  className,
  ...props
}: GoogleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <mask
        id="mask0_99196_7582"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path d="M19.9697 0H0.0292969V20H19.9697V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_99196_7582)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5714 10.2274C19.5714 9.51837 19.5076 8.83637 19.3899 8.18237H10V12.0504H15.366C15.1347 13.3004 14.4318 14.3594 13.3759 15.0684V17.5774H16.5983C18.4836 15.8364 19.5714 13.2734 19.5714 10.2274Z"
          fill="#4285F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99981 20.0002C12.6918 20.0002 14.948 19.1052 16.5981 17.5782L13.3757 15.0692C12.4834 15.6692 11.3408 16.0231 9.99981 16.0231C7.40257 16.0231 5.20514 14.2641 4.42049 11.9001H1.08984V14.4911C2.73054 17.7591 6.10246 20.0002 9.99981 20.0002Z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.42117 11.9C4.22176 11.3 4.10811 10.659 4.10811 10C4.10811 9.34103 4.22176 8.70004 4.42117 8.10004V5.50903H1.08973C0.414544 6.85903 0.0292969 8.38603 0.0292969 10C0.0292969 11.614 0.414544 13.141 1.08973 14.491L4.42117 11.9Z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99981 3.97701C11.4634 3.97701 12.7775 4.48201 13.8104 5.47301L16.6709 2.605C14.944 0.990996 12.6868 0 9.99981 0C6.10246 0 2.73054 2.241 1.08984 5.509L4.42049 8.10001C5.20514 5.73601 7.40257 3.97701 9.99981 3.97701Z"
          fill="#EA4335"
        />
      </g>
    </svg>
  );
}

export default GoogleIcon;
