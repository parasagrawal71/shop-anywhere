import axios from "axios";

// *** IMPORTS *** //
import { GET, POST, PUT, DELETE } from "./httpConstants";
import handleError from "./handleError";

// *** CONSTANTS *** //
const BASE_URL = `http://localhost:3200`;

const request = axios.create({
  baseURL: BASE_URL,
});

const jsonServer = (
  method,
  endpoint,
  body,
  parameters = null,
  headers = null
) => {
  // endpoint example: /api/{id}
  switch (method.toUpperCase()) {
    case GET:
      return request
        .get(endpoint, { params: parameters, headers }) // axios#get(url[, config])
        .then((response) => {
          //   console.log("get response:- ", response);
          return response.data;
        });
    case POST:
      return request
        .post(endpoint, body, { params: parameters, headers }) // axios.post(url[, data[, config]])
        .then((response) => {
          //   console.log("post response:- ", response);
          return response.data;
        })
        .catch((e) => handleError(e));
    case PUT:
      return request
        .put(endpoint, body, { params: parameters, headers }) // axios#put(url[, data[, config]])
        .then((response) => {
          //   console.log("put response:- ", response);
          return response.data;
        })
        .catch((e) => handleError(e));
    case DELETE:
      return request
        .delete(endpoint, { params: parameters, headers }) // axios#delete(url[, config])
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
