import axios from "axios";
import method from "./commonmethod";
import { GetCurrencyList } from "./constants";

export default {
  GetCurrencyList: async function () {
    try {
      const response = await axios.get(GetCurrencyList);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
};
