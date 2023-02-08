import TableGeneric from "Components/UI/TableGeneric";
import { useBusTable } from "../Hooks";

export const BusList = () => {
  const { busColumns, busRows, isLoading } = useBusTable();
  return (
    <TableGeneric
      columns={busColumns}
      rows={busRows}
      isLoading={isLoading}
      rowCount={busRows.length}
    />
  );
};
