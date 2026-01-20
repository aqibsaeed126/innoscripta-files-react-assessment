import { RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";
import { routes } from "./utils/routes";

export const App = () => {
  // This will trigger the Global ErrorBoundary for issues outside Router and 3rd party libraries
  // throw new Error("Global App Crash!");
  return <RouterProvider router={routes} />;
};
