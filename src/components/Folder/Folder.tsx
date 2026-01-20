import { useState, type FC } from "react";

import { Paper, Stack, Tabs } from "@mantine/core";

import { FolderNavigation } from "./FolderNavigation";
import type { ActionOption, UIViewProps } from "~/utils/types";
import { useData } from "~/contexts/DataContext";

interface FolderProps {
  navTitle: string;
  gridView: FC<UIViewProps>;
  tableView: FC<UIViewProps>;
  options?: ActionOption[];
}

export const Folder: React.FC<FolderProps> = ({ navTitle, gridView, tableView, options }) => {
  const [activeTab, setActiveTab] = useState<"grid" | "table">("grid");

  const { favorites, items } = useData();
  // Can be a Flag Field
  const finalData = navTitle === "Favorites" ? favorites : items;

  let ViewComponent: any;
  if (activeTab === "grid") {
    ViewComponent = gridView;
  } else {
    ViewComponent = tableView;
  }

  return (
    <Paper p="md" style={{ margin: 20 }}>
      <FolderNavigation title={navTitle} />

      <Tabs
        value={activeTab}
        onChange={(val) => setActiveTab(val as any)}
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Tabs.List>
          <Tabs.Tab value="grid">Grid View</Tabs.Tab>
          <Tabs.Tab value="table">Table View</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Stack>
        <ViewComponent items={finalData} options={options} />
      </Stack>
    </Paper>
  );
};
