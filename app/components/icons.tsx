import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 80 80",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinejoin: "round",
  strokeLinecap: "round",
  "aria-hidden": true,
};

/* Each icon loops a slow CSS animation (see `.ico-*` rules in globals.css). */

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle className="ico-ring" style={{ animationDelay: "0s" }} cx="40" cy="40" r="30" />
      <circle className="ico-ring" style={{ animationDelay: "0.9s" }} cx="40" cy="40" r="19" />
      <circle className="ico-ring" style={{ animationDelay: "1.8s" }} cx="40" cy="40" r="8" />
    </svg>
  );
}

export function CubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <g className="ico-cube-outer">
        <path d="M40 6 70 23v34L40 74 10 57V23L40 6Z" />
        <path d="M40 6v20M70 23 56 35M70 57 56 53M40 74V62M10 57l14-4M10 23l14 12" />
      </g>
      <g className="ico-cube-inner">
        <path d="M40 26 56 35v18l-16 9-16-9V35l16-9Z" />
        <path d="M40 44v18M40 44l16-9M40 44 24 35" />
      </g>
    </svg>
  );
}

export function BricksIcon(props: SVGProps<SVGSVGElement>) {
  /* Rows repeat every 66 units ([38 wide][4 gap][20 wide][4 gap]) and slide
     inside a clip the size of the original wall, so bricks appear to reshuffle. */
  const row = (y: number) => (
    <>
      <rect x="-57" y={y} width="38" height="13" />
      <rect x="-15" y={y} width="20" height="13" />
      <rect x="9" y={y} width="38" height="13" />
      <rect x="51" y={y} width="20" height="13" />
      <rect x="75" y={y} width="38" height="13" />
      <rect x="117" y={y} width="20" height="13" />
    </>
  );
  return (
    <svg {...base} {...props}>
      <defs>
        <clipPath id="ico-bricks-clip">
          <rect x="8.5" y="19.5" width="63" height="48" />
        </clipPath>
      </defs>
      <g clipPath="url(#ico-bricks-clip)">
        <g className="ico-row ico-row-a">{row(20)}</g>
        <g className="ico-row ico-row-b">{row(37)}</g>
        <g className="ico-row ico-row-c">{row(54)}</g>
      </g>
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path className="ico-check ico-check-back" d="M12 44 30 62 68 24" />
      <path className="ico-check ico-check-front" d="M12 36 30 54 68 16" />
      <path className="ico-check-depth" d="M12 36v8M30 54v8M68 16v8" />
    </svg>
  );
}

export const serviceIcons = {
  target: TargetIcon,
  cube: CubeIcon,
  bricks: BricksIcon,
  check: CheckIcon,
};
