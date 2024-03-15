export interface TreeItemData {
    id: string;
    label: string | null;
    icon: JSX.Element | string;
    code: string | undefined;
    children?: TreeItemData[];
  }