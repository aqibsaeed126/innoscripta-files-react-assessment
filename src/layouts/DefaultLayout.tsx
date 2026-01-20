import React from "react";

import { Box, Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { Sidebar } from "~/components";

export const DefaultLayout = React.memo(() => {
  // Replaced inline styling with Mantine components
  return (
    <Flex direction="row">
      <Sidebar />
      <Box flex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
});
