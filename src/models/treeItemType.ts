export interface TreeItemData {
    id: string;
    type: string;
    label: string | null;
    icon: JSX.Element | string;
    code?: string | undefined;
    children?: TreeItemData[];
  }