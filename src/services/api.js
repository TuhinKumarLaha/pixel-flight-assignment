import axios from "axios";
// import { getItem } from "../utils/utils";
// import { api_access_token_key } from "../utils/constants";
const api = axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "https://devadmin.altabooking.com/api/v2/",
  headers: {
    // "Content-Type": "application/json",
    apikey: "indusAltaR2PSM",
    currency:
      "U2FsdGVkX1/O0sFe9FnokQdTBRP/rRIlcPZEWbzHL9ncZwZzp/Fu/2Jnt0z8ukCALQNDRknKwa5WdmjDRC2XA2a0gz/ZfvHeYTIq7fBZi9P4kQ7KvQYueLB2Rl4puqOTSQyBsbLGPc8cQ9KDZLMVapCruTsJcGzRnaOo1CZksLPMzmNOPqe+ePZk6UJiAUmoDS6p4JvLCmpe0RATiqDh7g==",
  },
});

api.interceptors.request.use(
  (config) => {
    // const token = getItem(api_access_token_key);
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    return error;
  }
);

export { api };
