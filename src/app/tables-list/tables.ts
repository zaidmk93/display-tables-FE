export interface TablesFile {
  tables: Array<OurTable>;
}

export interface OurTable {
  title: string;
  rows: number;
  columns: number;
  notes: string;
}
