import { PageLoadingSpinner } from "@packages/ui/components/composite";
import { Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const UserPage = lazy(() => import("~/components/pages/User"));

const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoadingSpinner />}>
      <Outlet />
    </Suspense>
  ),
});

const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user",
  component: UserPage,
  pendingComponent: PageLoadingSpinner,
});

const routeTree = rootRoute.addChildren([userRoute]);

export const router = createRouter({ routeTree });
