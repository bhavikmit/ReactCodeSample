import axios from "axios";
import {
  Insert_TranscationData,
  TranscationTypeList,
  GetAllTranscationList,
} from "./constants";
import method from "./commonmethod";

export default {
  InsertTranscationExcelData: async function (lsttransactionModels) {
    try {
      const response = await axios.post(
        Insert_TranscationData,
        lsttransactionModels
      );
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetTranscationList: async function () {
    try {
      const response = await axios.get(TranscationTypeList);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetAllTranscationList: async function () {
    try {
      const response = await axios.get(GetAllTranscationList);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
};
