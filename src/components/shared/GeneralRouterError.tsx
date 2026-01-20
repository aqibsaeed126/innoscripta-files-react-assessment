import { Alert, Stack } from "@mantine/core";
import { Link, useRouteError } from "react-router-dom";

export function GeneralRouterError() {
  const errorMessage = useRouteError();

  return (
    <Alert color="red" title="Component Crash" variant="filled">
      <Stack>
        <p>{"General Error Message: " + (errorMessage as any)?.message || "Unknown error"}</p>
        <Link to="/">Try Reload</Link>
      </Stack>
    </Alert>
  );
}
