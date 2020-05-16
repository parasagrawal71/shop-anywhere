// *** IMPORTS *** //
import {
  NOT_FOUND,
  FORBIDDEN,
  UNAUTHORIZED,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  REQUEST_TIMED_OUT,
} from "./httpConstants";

const handleError = (error) => {
  switch (error.response.status) {
    case NOT_FOUND:
      return "Server could not find the requested information.";
    case FORBIDDEN:
      return "FORBIDDEN";
    case UNAUTHORIZED:
      return "UNAUTHORIZED";
    case BAD_REQUEST:
      return "BAD_REQUEST";
    case INTERNAL_SERVER_ERROR:
      return "INTERNAL_SERVER_ERROR";
    case REQUEST_TIMED_OUT:
      return "REQUEST_TIMED_OUT";
    default:
      return "Unknown Error";
  }
};

export default handleError;
