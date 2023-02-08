import { APP } from "../../../Constants/App";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CustomerCreateRequest } from "../../../proto/profile_pb";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import { client } from "../../../Services/Api";
import { toast } from "react-toastify";

export const useCustomerForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const reqCustomer = new CustomerCreateRequest();
  const schema = yup.object().shape({
    firstName: yup.string().required(APP.REQUIRED_FIELD),
    userName: yup.string().required(APP.REQUIRED_FIELD),
    lastName: yup.string().required(APP.REQUIRED_FIELD),
    birthdate: yup.string().required(APP.REQUIRED_FIELD),
    phoneNumber: yup.string().required(APP.REQUIRED_FIELD),
    address: yup.string().required(APP.REQUIRED_FIELD),
    gender: yup.string().required(APP.REQUIRED_FIELD),
    imageUrl: yup.string().required(APP.REQUIRED_FIELD),
  });

  const form = useForm<any>({
    defaultValues: {
      userName: "",
      firstName: "",
      lastName: "",
      birthdate: moment().format(),
      phoneNumber: "",
      address: "",
      gender: 1,
      imageUrl: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    userName,
    firstName,
    lastName,
    birthdate,
    phoneNumber,
    address,
    gender,
    imageUrl,
  }: any) => {
    setIsLoading(true);

    reqCustomer.setUsername(userName);
    reqCustomer.setFirstName(firstName);
    reqCustomer.setAddress(address);
    reqCustomer.setLastName(lastName);
    reqCustomer.setBirthdate(birthdate);
    reqCustomer.setPhoneNumber(phoneNumber);
    reqCustomer.setGender(gender);
    reqCustomer.setImageUrl(imageUrl);

    client
      .doCustomerCreate(reqCustomer, null)
      .then((res) => {
        console.log("salom");
        toast("succecfully");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { form, onSubmit, isLoading };
};
