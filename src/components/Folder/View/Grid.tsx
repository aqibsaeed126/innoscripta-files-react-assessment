import { Card, Text, SimpleGrid, Group, Badge, Pagination } from "@mantine/core";
import { FolderActions } from "../FolderActions";
import type { UIViewProps } from "~/utils/types";
import { formatDateTime } from "~/utils/date-time-utils";
import { usePagination } from "~/hooks/usePagination";

export const GridView: React.FC<UIViewProps> = ({ items, options }) => {
  const { activePage, setPage, paginatedItems, totalPages } = usePagination(items);

  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg" verticalSpacing="lg">
        {paginatedItems?.map((item) => (
          <Card
            key={item.id}
            shadow="sm"
            radius="md"
            padding="lg"
            withBorder
            style={{ overflow: "visible" }}
          >
            <Group justify="space-between" mb="xs">
              <Group gap="xs">
                <Text fw={600}>{item.name}</Text>

                <Badge color={item.type === "folder" ? "blue" : "gray"} variant="light" radius="sm">
                  {item.type}
                </Badge>
              </Group>

              <FolderActions item={item} options={options} />
            </Group>

            <Text size="sm" c="dimmed">
              Created: {formatDateTime(item.createdAt)}
            </Text>
            <Text size="sm" c="dimmed">
              Updated: {formatDateTime(item.createdAt)}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
      {totalPages > 1 && ( // Only show pagination if there's more than one page
        <Group justify="flex-end" mt="md">
          <Pagination total={totalPages} value={activePage} onChange={setPage} />
        </Group>
      )}
    </>
  );
};
