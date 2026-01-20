import { Alert } from "@mantine/core";
import { Link, useRouteError } from "react-router-dom";

export function FavouriteRouterError() {
  const errorMessage = useRouteError();

  return (
    <>
      <Alert color="red" title="Router Error" variant="filled"></Alert>
      <p>{(errorMessage as any)?.message || "Unknown error"}</p>
      <Link to="/">Go to Homepage</Link>
    </>
  );
}
