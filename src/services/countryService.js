import axios from "axios";
import { GetCountryList } from "./constants";

import method from "./commonmethod";

export default {
  GetCountryList: async function () {
    try {
      const response = await axios.get();
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
};
