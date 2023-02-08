import { DataGrid, GridColDef } from "@mui/x-data-grid";

type TableGenericProp = {
  columns: GridColDef[];
  rows: any[];
  isLoading: boolean;
  rowCount: number;
};

export default function TableGeneric({
  columns,
  rows,
  isLoading,
  rowCount,
}: TableGenericProp) {
  return (
    <DataGrid
      disableColumnMenu
      rows={rows}
      rowCount={rowCount}
      columns={columns}
      loading={isLoading}
      headerHeight={40}
      autoHeight
      rowHeight={40}
      disableSelectionOnClick
      hideFooterSelectedRowCount
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
    />
  );
}
