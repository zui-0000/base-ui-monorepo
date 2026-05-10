import type { FC } from "react";
import { LoadingSpinner } from "../../primitives";

export const PageLoadingSpinner: FC = () => {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <LoadingSpinner size={48} />
    </div>
  );
};
