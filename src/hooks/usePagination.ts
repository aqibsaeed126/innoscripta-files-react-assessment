import { useState, useMemo } from "react";
import { ITEMS_PER_PAGE } from "~/utils/consts"; // Assuming ITEMS_PER_PAGE is defined here

interface UsePaginationResult<T> {
  activePage: number;
  setPage: (page: number) => void;
  paginatedItems: T[];
  totalPages: number;
}

export const usePagination = <T>(items: T[] | undefined): UsePaginationResult<T> => {
  const [activePage, setPage] = useState(1);
  const itemsPerPage = ITEMS_PER_PAGE;

  // Ensure items is always an array for calculations
  const safeItems = items || [];

  const totalPages = useMemo(() => {
    return Math.ceil(safeItems.length / itemsPerPage);
  }, [safeItems.length, itemsPerPage]);

  const paginatedItems = useMemo(() => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return safeItems.slice(startIndex, endIndex);
  }, [activePage, safeItems, itemsPerPage]);

  return { activePage, setPage, paginatedItems, totalPages };
};
