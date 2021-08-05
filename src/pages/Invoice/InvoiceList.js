import React, { useState, useEffect } from "react";
import { Nav, Button } from "@themesberg/react-bootstrap";
import transcationService from "../../services/transcationService";
import invoiceService from "../../services/invoiceService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  numberFilter,
  dateFilter,
} from "react-bootstrap-table2-filter";
import paginationFactory, {
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import { DES } from "crypto-js";

export default () => {
  let [invoiceList, getInvoiceList] = useState([]);

  useEffect(() => {
    //getInvoiceAllList();
  }, []);

  const getInvoiceAllList = () => {
    invoiceService.GetInvoice().then((res) => {
      if (res.status === 200) {
        getInvoiceList(res.data.result);
      } else {
        alert(res.data.responseMessage);
      }
    });
  };
  const deleteInvoice = (invoiceId) => {
    debugger;
    invoiceService.DeleteInvoice(invoiceId).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      } else {
        alert(res.data.responseMessage);
      }
    });
  };

  const formatWithIcon = (cell, row) => {
    return (
      <span className="icon icon-sm">
        <FontAwesomeIcon icon={faEye} className="me-2" title="View Details" />
        <Link
          to={{
            pathname: "/Invoice/InvoiceMaster",
            state: { invoiceID: row.invoiceID },
          }}
        >
          <FontAwesomeIcon
            icon={faEdit}
            className="me-2"
            title="Edit Details"
          ></FontAwesomeIcon>
        </Link>

        <Link>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="me-2"
            title="Delete Record"
            onClick={() => deleteInvoice(row.invoiceID)}
          />
        </Link>
      </span>
    );
  };

  const TableHeaderColumn = [
    {
      dataField: "invoiceNumber",
      text: "Invoice Number",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "clientName",
      text: "Client Name",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "invoiceDate",
      text: "Invoice Date",
      sort: true,
      filter: dateFilter(),
    },
    {
      dataField: "invoiceDueDate",
      text: "Invoice DueDate",
      sort: true,
      filter: dateFilter(),
    },
    { dataField: "amount", text: "Amount", filter: numberFilter(), sort: true },
    {
      dataField: "invoiceStatus",
      text: "Invoice Status",
      filter: textFilter(),
      sort: true,
    },

    {
      dataField: "invoiceID",
      text: "Action",
      sort: true,
      title: "note",
      formatter: formatWithIcon,
    },
  ];

  const option = {
    custom: true,
    totalSize: invoiceList.length,
  };

  return (
    <>
      <Link to={"/Invoice/InvoiceMaster/"} className="btn btn-success">
        Add Invoice
      </Link>

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Invoice List</h4>
        </div>
      </div>
      <PaginationProvider pagination={paginationFactory(option)}>
        {({ paginationProps, paginationTableProps }) => (
          <div>
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={invoiceList}
              columns={TableHeaderColumn}
              {...paginationTableProps}
              filter={filterFactory()}
            ></BootstrapTable>
            <div className="row">
              <div className="col-md-10">
                <PaginationTotalStandalone {...paginationProps} />
              </div>
              <div className="col-md-2">
                <PaginationListStandalone {...paginationProps} />
              </div>
            </div>
          </div>
        )}
      </PaginationProvider>
    </>
  );
};
