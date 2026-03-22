import { Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const UserPage = lazy(() => import("~/components/pages/User"));

const rootRoute = createRootRoute({
  component: () => (
    <Suspense
      fallback={<div className="flex min-h-svh items-center justify-center">読み込み中...</div>}
    >
      <Outlet />
    </Suspense>
  ),
});

const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user",
  component: UserPage,
});

const routeTree = rootRoute.addChildren([userRoute]);

export const router = createRouter({ routeTree });
