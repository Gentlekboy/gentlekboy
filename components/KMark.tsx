import type { SVGProps } from "react";

export default function KMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M32,12 L32,56"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <circle cx="32" cy="82" r="7" fill="currentColor" />
      <path
        d="M76,12 L32,40 L76,84"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
