import axios from "axios";
import method from "./commonmethod";
import { AddCompany } from "./constants";

export default {
  AddCompany: async function (addCompanyModel) {
    try {
      const response = await axios.post(AddCompany, addCompanyModel);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
};
