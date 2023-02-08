import { RhanovServiceClient } from "proto/ProfileServiceClientPb";

export const client = new RhanovServiceClient(`${process.env.REACT_APP_URL}`);
