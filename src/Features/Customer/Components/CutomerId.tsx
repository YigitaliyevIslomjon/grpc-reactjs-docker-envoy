import { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import { CustomerReadRequest, CustomerReadResponse } from "proto/profile_pb";
import { client } from "Services/Api";

export const CustomerId = () => {
  const [customer, setCustomer] = useState<CustomerReadResponse.AsObject>();
  useEffect(() => {
    const reqCustomer = new CustomerReadRequest();
    reqCustomer.setId("1675816519062000083");
    client
      .doCustomerRead(reqCustomer, null)
      .then((res) => {
        setCustomer(res.toObject());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h6">Id : {customer?.id}</Typography>
      <Typography variant="h6">addres : {customer?.address}</Typography>
      <Typography variant="h6">birthdate : {customer?.birthdate}</Typography>
      <Typography variant="h6">firstName : {customer?.firstName}</Typography>
      <Typography variant="h6">gender : {customer?.gender}</Typography>
      <Typography variant="h6">imgUrl : {customer?.imageUrl}</Typography>
      <Typography variant="h6">lastName : {customer?.lastName}</Typography>
    </Box>
  );
};
