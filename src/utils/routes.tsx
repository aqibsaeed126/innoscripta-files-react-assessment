import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "~/layouts";
import { GeneralRouterError, FavouriteRouterError, Loading } from "~/components";

// Lazy-loaded page components
const LazyHomepage = React.lazy(() => import("~/pages/Homepage/Homepage.tsx"));
const LazyFavorites = React.lazy(() => import("~/pages/Favorites/Favorites.tsx"));

/*
1- Global Error Boundary for all routes if not defined in the route
2- Router Error specific to Favorites page
*/
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <GeneralRouterError />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <LazyHomepage />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyFavorites />
          </Suspense>
        ),
        errorElement: <FavouriteRouterError />,
      },
    ],
  },
]);
