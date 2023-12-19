import axios from "axios";
import { getEncrypted } from "../utils/utils";
const api = axios.create({
  baseURL: "https://devadmin.altabooking.com/api/v2/",
  headers: {
    apikey: "indusAltaR2PSM",
    currency:
      "U2FsdGVkX1/O0sFe9FnokQdTBRP/rRIlcPZEWbzHL9ncZwZzp/Fu/2Jnt0z8ukCALQNDRknKwa5WdmjDRC2XA2a0gz/ZfvHeYTIq7fBZi9P4kQ7KvQYueLB2Rl4puqOTSQyBsbLGPc8cQ9KDZLMVapCruTsJcGzRnaOo1CZksLPMzmNOPqe+ePZk6UJiAUmoDS6p4JvLCmpe0RATiqDh7g==",
  },
});

api.interceptors.request.use(
  (config) => {
    config.data = { request_data: getEncrypted(config.data) };
    return config;
  },
  (error) => {
    return error;
  }
);

export { api };
