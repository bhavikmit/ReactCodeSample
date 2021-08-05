import axios from "axios";
import {
  AddInvoiceUrl,
  Get_InvoiceList,
  Get_InvoiceInitialData,
  GetInvoiceItem,
  GetInvoiceViewDetailsById,
  DeleteInvoice,
} from "./constants";

import method from "./commonmethod";

export default {
  AddInvoice: async function (addInvoice) {
    try {
      debugger;
      const response = await axios.post(AddInvoiceUrl, addInvoice);
      return response;
    } catch (error) {
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
  GetInvoiceViewDetailsById: async function (invoiceID) {
    try {
      const response = await axios.get(GetInvoiceViewDetailsById, {
        params: {
          invoiceID: parseInt(invoiceID),
        },
      });
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
  GetInvoiceItem: async function () {
    try {
      const response = await axios.get(GetInvoiceItem);
      return response;
    } catch (error) {
      return method.Exception(error);
    }
  },
  DeleteInvoice: async function (invoiceId) {
    try {
      debugger;
      const response = await axios.delete(DeleteInvoice, {
        params: {
          invoiceId: parseInt(invoiceId),
        },
      });
      return response;
    } catch (error) {
      debugger;
      return method.Exception(error);
    }
  },
};
