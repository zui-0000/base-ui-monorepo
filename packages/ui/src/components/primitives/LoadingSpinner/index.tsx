import type { FC } from "react";

type Props = {
  size?: number;
};

export const LoadingSpinner: FC<Props> = ({ size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="読み込み中"
      role="img"
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="94 32"
        className="origin-center animate-spin text-blue-600"
        style={{ animationDuration: "0.8s" }}
      />
    </svg>
  );
};
