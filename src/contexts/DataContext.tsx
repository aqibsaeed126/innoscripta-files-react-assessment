import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

import type { Item } from "~/utils/types";

interface DataContextType {
  items: Item[];
  favorites: Item[];
  setItems: (items: Item[]) => void;
  setFavorites: (favorites: Item[]) => void;
  markAsFavorite: (item: Item) => void;
  removeFromFavorite: (item: Item) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [favorites, setFavorites] = useState<Item[]>([]);

  const markAsFavorite = useCallback((item: Item) => {
    // similar mark as Favorite can be written here
    console.log(item);
    //
  }, []);

  const removeFromFavorite = useCallback((item: Item) => {
    // Remove from favorite logic
    setFavorites((prevFavs) => {
      return prevFavs.filter((fav) => fav.id !== item.id);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      items,
      favorites,
      setItems,
      setFavorites,
      markAsFavorite,
      removeFromFavorite,
    }),
    [items, favorites, setItems, setFavorites, markAsFavorite],
  );

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
