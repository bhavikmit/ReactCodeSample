import axios from "axios";
import {
  AUTHENTICATE_USER,
  AddInvoiceUrl,
  Get_InvoiceList,
  Get_InvoiceInitialData,
  Get_ClientDetailsById,
  Get_Years,
  AddUpdate_year,
  Get_YearByYearID,
  Delete_Year,
  AddUpdate_bank,
  GetCompanyListBySubscriberId,
  GetFinancialYearByCompanyId,
  GetBankNameList,
  TranscationTypeList,
  GetVendorList,
  GetClientList,
  GetCountryTaxList,
} from "./constants";
import method from "./commonmethod";

export default {
  authentication: async function (loginRequest) {
    try {
      const response = await axios.post(AUTHENTICATE_USER, loginRequest);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  AddInvoice: async function (addInvoice) {
    try {
      const response = await axios.post(AddInvoiceUrl, addInvoice);
      return response;
    } catch (error) {
      debugger;
      return method.Exception(error);
    }
  },
  GetInvoice: async function () {
    try {
      const response = await axios.get(Get_InvoiceList);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetLastGeneratedInvoice: async function () {
    try {
      const response = await axios.get(Get_InvoiceInitialData);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetClientDetailsById: async function (clientId) {
    try {
      const response = await axios.get(Get_ClientDetailsById, {
        params: {
          clientId: parseInt(clientId),
        },
      });
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetCompanyListBySubscriberId: async function (subscriberId) {
    try {
      const response = await axios.get(GetCompanyListBySubscriberId, {
        params: {
          subscriberId: parseInt(subscriberId),
        },
      });
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetFinancialYearByCompanyId: async function (companyId) {
    try {
      const response = await axios.get(GetFinancialYearByCompanyId, {
        params: {
          companyId: parseInt(companyId),
        },
      });
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetBankNameList: async function () {
    try {
      const response = await axios.get(GetBankNameList);
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

  GetVendorList: async function (companyId) {
    try {
      const response = await axios.get(GetVendorList, {
        params: {
          companyId: parseInt(companyId),
        },
      });
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },

  GetClientList: async function (companyId) {
    try {
      const response = await axios.get(GetClientList, {
        params: {
          companyId: parseInt(companyId),
        },
      });
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },

  GetYears: async function () {
    try {
      const response = await axios.get(Get_Years);
      console.log(response);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },

  AddUpdateYear: async function (addYearModel) {
    try {
      const response = await axios.post(AddUpdate_year, addYearModel);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetYearByYearID: async function (yearID) {
    try {
      const response = await axios.get(Get_YearByYearID + "/" + yearID, {
        // params: {
        //   yearID: parseInt(yearID),
        // },
      });
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  DeleteYear: async function (YearID) {
    try {
      const response = await axios.delete(Delete_Year, {
        params: {
          YearID: parseInt(YearID),
        },
      });
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  GetCountryTaxList: async function (companyId) {
    try {
      const response = await axios.get(GetCountryTaxList, {
        params: {
          companyId: parseInt(companyId),
        },
      });
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  AddUpdateBank: async function (addBankModel) {
    try {
      const response = await axios.post(AddUpdate_bank, addBankModel);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
};
