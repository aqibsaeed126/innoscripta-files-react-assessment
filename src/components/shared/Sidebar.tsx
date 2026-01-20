import React, { useCallback } from "react";

import { Button, Paper, Stack } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

import { BUTTON_DEFAULT_VARIANT, BUTTON_FILLED_VARIANT } from "~/utils/consts";

export const Sidebar = React.memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate],
  );

  return (
    <Paper
      withBorder
      p="md"
      style={(theme) => ({
        color: theme.colors.red[5],
        height: "100vh",
        fontSize: theme.fontSizes.xs,
        background: theme.other.bgsidebar,
        width: theme.other.sideBar,
      })}
    >
      <Stack>
        <Button
          onClick={() => handleNavigation("/")}
          variant={location.pathname === "/" ? BUTTON_FILLED_VARIANT : BUTTON_DEFAULT_VARIANT}
        >
          Homepage
        </Button>

        <Button
          onClick={() => handleNavigation("favorites")}
          variant={
            location.pathname === "/favorites" ? BUTTON_FILLED_VARIANT : BUTTON_DEFAULT_VARIANT
          }
        >
          Favorites
        </Button>
      </Stack>
    </Paper>
  );
});
