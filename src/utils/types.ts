export type Item = {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export interface ActionOption {
  label: string;
  onClick: (item: Item) => void;
}

export interface UIViewProps {
  items: Item[];
  options: ActionOption[];
}
