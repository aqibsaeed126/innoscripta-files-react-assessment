export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  const datePart = date.toLocaleDateString("en-US");
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${datePart} at ${timePart}`;
};
