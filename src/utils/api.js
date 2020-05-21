import axios from "axios";

export const fetchBusinesses = () => {
  return axios
    .get(
      "https://j5qz3dnbs3.execute-api.eu-west-2.amazonaws.com/v1/newindependent"
    )
    .then(({ data: { body } }) => {
      return body;
    });
};

export const sendBusiness = (requestBody) => {
  return axios
    .post(
      "https://j5qz3dnbs3.execute-api.eu-west-2.amazonaws.com/v1/newindependent",
      requestBody
    )
    .then((response) => {
      console.log(response);
      // return response;
    });
};
