// IMPORTS //
import {
  NOT_FOUND,
  FORBIDDEN,
  UNAUTHORIZED,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  REQUEST_TIMED_OUT,
} from "./httpConstants";

const handleError = (error) => {
  // console.log("handleError error:- ", error);
  // console.log("handleError error.response:- ", error.response);
  // console.log("handleError error.response:- ", error.message);
  const status = error.response ? error.response.status : null;
  switch (status) {
    case NOT_FOUND:
      return "Server could not find the requested information.";
    case FORBIDDEN:
      return "FORBIDDEN";
    case UNAUTHORIZED:
      return "UNAUTHORIZED";
    case BAD_REQUEST:
      return "BAD REQUEST";
    case INTERNAL_SERVER_ERROR:
      return "INTERNAL SERVER ERROR";
    case REQUEST_TIMED_OUT:
      return "REQUEST TIMED OUT";
    default:
      return `${error.message}`;
  }
};

export default handleError;
