import { RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools as RouterProviderDevtools } from "@tanstack/react-router-devtools";
import type { FC } from "react";
import { router } from "~/routes/router";

export const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} context={{ router }} />
      {/* 本番ビルド時には自動的に何もレンダリングしないので、環境分岐の記述は不要 */}
      <RouterProviderDevtools router={router} position="bottom-right" />
    </>
  );
};
