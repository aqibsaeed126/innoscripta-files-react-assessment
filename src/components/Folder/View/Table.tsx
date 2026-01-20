import { Group, Pagination, Table } from "@mantine/core";

import { FolderActions } from "../FolderActions";
import { formatDateTime } from "~/utils/date-time-utils";
import type { UIViewProps } from "~/utils/types";
import { usePagination } from "~/hooks/usePagination";

export const TableView: React.FC<UIViewProps> = ({ items, options }) => {
  const { activePage, setPage, paginatedItems, totalPages } = usePagination(items);

  const rows = paginatedItems.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.id}</Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.type}</Table.Td>
      <Table.Td>{formatDateTime(item.createdAt)}</Table.Td>
      <Table.Td>{formatDateTime(item.updatedAt)}</Table.Td>
      <Table.Td>
        <FolderActions item={item} options={options} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Created At</Table.Th>
            <Table.Th>Updated At</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      {totalPages > 1 && ( // Only show pagination if there's more than one page
        <Group justify="flex-end" mt="md">
          <Pagination total={totalPages} value={activePage} onChange={setPage} />
        </Group>
      )}
    </>
  );
};
