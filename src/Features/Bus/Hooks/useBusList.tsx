import {
  BusReadListResponse,
  BusReadRequest,
  BusReadResponse,
} from "proto/profile_pb";
import { useEffect, useState } from "react";
import { client } from "Services/Api";

export const useBusList = () => {
  const [busList, setBusList] = useState<BusReadResponse.AsObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getBusList = () => {
    setIsLoading(true);
    const busRequest = new BusReadRequest();
    client
      .doBusListRead(busRequest, {})
      .then((res) => {
        const { resultsList } = (res as BusReadListResponse).toObject();
        setBusList(resultsList);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getBusList();
  }, []);

  return { busList, isLoading };
};
