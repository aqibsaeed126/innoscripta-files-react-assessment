import { useEffect, useMemo } from "react";

import { Folder, Loading } from "~/components";
import { GridView, TableView } from "~/components/Folder/View/";
import { useData } from "~/contexts/DataContext";
import { useFetchData } from "~/hooks";
import type { Item } from "~/utils/types";

// Similar Error handling can be done here as Favourites Page
const Homepage = () => {
  const { data: fetchedItems, loading, error } = useFetchData("/items.json");
  const { items, setItems, markAsFavorite } = useData();

  useEffect(() => {
    if (fetchedItems.length > 0 && items?.length == 0) {
      setItems(fetchedItems);
    }
  }, [fetchedItems, setItems]);

  const memoizedOptions = useMemo(
    () => [
      {
        label: "Mark as Favorite",
        onClick(item: Item) {
          markAsFavorite(item);
        },
      },
      {
        label: "Share",
        onClick() {
          alert("Shared");
        },
      },
      {
        label: "Delete",
        onClick() {
          alert("Deleted");
        },
      },
    ],
    [],
  );

  // Tested general router Error handler for homepage
  if (error) {
    // throw new Error("Manual Crash!");
    throw error;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Folder
      navTitle="Homepage"
      gridView={GridView}
      tableView={TableView}
      options={memoizedOptions}
    />
  );
};

export default Homepage;
