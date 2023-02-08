import { useMemo } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { useBusList } from "./useBusList";
import { BusTableEnum } from "../types";
import { APP } from "Constants/App";

export const useBusTable = () => {
  const { busList: busRows, isLoading } = useBusList();

  const busColumns: GridColDef[] = useMemo(
    () => [
      {
        field: BusTableEnum.ID,
        headerName: APP.ID,
        minWidth: 55,
        flex: 1,
        sortable: false,
        filterable: false,
      },
      {
        field: BusTableEnum.ARRIVAL_STATION,
        headerName: APP.ARRIVAL_STATION,
        width: 902,
        flex: 1,
        sortable: false,
        filterable: false,
      },
      {
        field: BusTableEnum.ARRIVAL_TIME,
        headerName: APP.ARRIVAL_TIME,
        width: 150,
        flex: 1,
        sortable: false,
        filterable: false,
      },
      {
        field: BusTableEnum.DEPARTURE_STATION,
        headerName: APP.DEPARTURE_STATION,

        flex: 1,

        sortable: false,
        filterable: false,
        width: 50,
      },
      {
        field: BusTableEnum.DEPARTURE_TIME,
        headerName: APP.DEPARTURE_TIME,

        flex: 1,

        sortable: false,
        filterable: false,
        width: 50,
      },
      {
        field: BusTableEnum.NAME,
        headerName: APP.NAME,

        flex: 1,

        sortable: false,
        filterable: false,
        width: 50,
      },
      {
        field: BusTableEnum.PRICE,
        headerName: APP.PRICE,

        flex: 1,

        sortable: false,
        filterable: false,
        width: 50,
      },
      {
        field: BusTableEnum.RANGE_TIME,
        headerName: APP.RANGE_TIME,

        flex: 1,

        sortable: false,
        filterable: false,
        width: 50,
      },
      {
        field: BusTableEnum.SEAT_TYPE,
        headerName: APP.SEAT_TYPE,

        flex: 1,

        sortable: false,
        filterable: false,
        width: 50,
      },
    ],
    []
  );

  return {
    busRows,
    busColumns,
    isLoading,
  };
};
