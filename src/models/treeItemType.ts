export interface TreeItemData {
    id: string;
    treeDirectory?: any[];
    type: string;
    label: string | null;
    icon: JSX.Element | string;
    code?: string | undefined;
    children?: TreeItemData[];
  }