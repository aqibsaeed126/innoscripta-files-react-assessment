import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/components";
import { createTheme, MantineProvider } from "@mantine/core";
import { DataProvider } from "./contexts/DataContext";
import { reportWebVitals } from "./utils/vitals";
const theme = createTheme({
  other: {
    bgsidebar: "#f9f9f9",
    sideBar: 200,
  },
});
const root$ = document.getElementById("root");

if (!root$) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(root$);
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MantineProvider theme={theme}>
        <DataProvider>
          <App />
        </DataProvider>
      </MantineProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

// Report web vitals
reportWebVitals();
