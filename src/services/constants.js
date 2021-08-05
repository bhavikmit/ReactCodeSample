const apiUrl = "http://localhost:61171/api/";
export const AddInvoiceUrl = apiUrl + "Invoice/AddInvoice";
export const Get_InvoiceList = apiUrl + "Invoice/GetInvoiceList";
export const Get_InvoiceInitialData =
  apiUrl + "Invoice/GetInvoiceDateInitialData";
export const Get_ClientDetailsById = apiUrl + "Invoice/GetClientDetailsById";
export const GetInvoiceViewDetailsById =
  apiUrl + "Invoice/GetInvoiceViewDetailsById";
export const AUTHENTICATE_USER = apiUrl + "Login/authenticate";
export const AddCompanyUser = apiUrl + "Admin/AddCompanyUser";
export const Get_Years = apiUrl + "Year";
export const AddUpdate_year = apiUrl + "Year";
export const Get_YearByYearID = apiUrl + "Year";
export const Delete_Year = apiUrl + "Year";
export const AddUpdate_bank = apiUrl + "Bank/AddUpdateBank";

export const Insert_TranscationData = apiUrl + "Transaction/UploadExcel";

export const GetCompanyListBySubscriberId =
  apiUrl + "User/GetCompanyListBySubscriberId";

export const GetFinancialYearByCompanyId = apiUrl + "User/GetFinancialYear";

export const GetBankNameList = apiUrl + "User/GetBankNameList";

export const GetCurrencyList = apiUrl + "User/GetCurrencyList";

export const TranscationTypeList = apiUrl + "Transaction/TranscationTypeList";

export const GetVendorList = apiUrl + "User/GetVendorList";

export const GetClientList = apiUrl + "User/GetClientList";

export const GetCountryTaxList = apiUrl + "User/GetCountryTaxList";

export const GetInvoiceItem = apiUrl + "Invoice/GetInvoiceItem";

export const DeleteInvoice = apiUrl + "Invoice/DeleteInvoice";

export const GetAllTranscationList =
  apiUrl + "Transaction/GetAllTranscationList";

export const AddCompany = apiUrl + "Company/AddCompany";

export const GetCountryList = apiUrl + "Country/AddCompany";
