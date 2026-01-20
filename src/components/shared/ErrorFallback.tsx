import { type FallbackProps } from "react-error-boundary";

export function ErrorFallback({ error }: FallbackProps) {
  return (
    <>
      <p>{"Something Went Wrong - Please Refresh ( Global App Error Boundary ) " + error}</p>
    </>
  );
}
