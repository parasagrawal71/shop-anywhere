import axios from "axios";

// IMPORTS //
import { GET, POST, PUT, DELETE } from "./httpConstants";
import handleError from "./handleError";

// CONSTANTS //
const BASE_URL = `http://localhost:3200`;

const request = axios.create({
  baseURL: BASE_URL,
});

const jsonServer = (method, endpoint, body, config) => {
  switch (method.toUpperCase()) {
    case GET:
      return request
        .get(endpoint, config)
        .then((response) => {
          //   console.log("get response:- ", response);
          return response.data;
        })
        .catch((e) => handleError(e));

    case POST:
      return request
        .post(endpoint, body, config)
        .then((response) => {
          //   console.log("post response:- ", response);
          return response.data;
        })
        .catch((e) => handleError(e));

    case PUT:
      return request
        .put(endpoint, body, config)
        .then((response) => {
          //   console.log("put response:- ", response);
          return response.data;
        })
        .catch((e) => handleError(e));

    case DELETE:
      return request
        .delete(endpoint, config)
        .then((response) => {
          //   console.log("delete response:- ", response);
          return response.data;
        })
        .catch((e) => handleError(e));

    default:
      return "Wrong call";
  }
};

export default jsonServer;

// endpoint example: /api/{id}

// config
// {
//   params,
//   headers
// }
