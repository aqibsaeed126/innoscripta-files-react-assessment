import { useEffect, useMemo } from "react";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Folder, Loading } from "~/components";
import { GridView, TableView } from "~/components/Folder/View";
import { useData } from "~/contexts/DataContext";
import { useFetchData } from "~/hooks";
import type { Item } from "~/utils/types";

const Favorites = () => {
  const { data: fetchedItems, loading, error } = useFetchData("/favorites.json");
  const [opened, { open, close }] = useDisclosure(false);
  const { favorites, setFavorites, removeFromFavorite } = useData();

  useEffect(() => {
    if (fetchedItems.length > 0 && favorites?.length === 0) {
      setFavorites(fetchedItems);
    }
  }, [fetchedItems, setFavorites, favorites]);

  const memoizedOptions = useMemo(
    () => [
      {
        label: "Remove from Favorites",
        onClick(item: any) {
          removeFromFavorite(item);
        },
      },
      {
        label: "Open item location",
        onClick() {
          open();
        },
      },
      {
        label: "Share",
        onClick() {
          open();
        },
      },
      {
        label: "Delete",
        onClick(item: Item) {
          open();
        },
      },
    ],
    [],
  );

  if (error) {
    throw error; // Re-throw error to be caught by the nearest Error Boundary
  }

  if (loading) {
    return <Loading />;
  }

  // Tested Favourite Route Crash with ReactElement and it works
  // throw new Error("Manual Crash!");

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        {"Favorites Items"}
      </Modal>
      <Folder
        navTitle="Favorites"
        gridView={GridView}
        tableView={TableView}
        options={memoizedOptions}
      />
    </>
  );
};

export default Favorites;
