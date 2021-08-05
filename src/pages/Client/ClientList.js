import React, { useState, useEffect } from "react";
import companyService from "../../services/companyService";
import commonServices from "../../services/commonServices";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
import { Client } from "../../services/constants";

export default () => {
  let [companyList, getClientList] = useState([]);

  useEffect(() => {
    getAllClientList();
  }, []);

  const getAllClientList = () => {
    let clientId = null;
    commonServices.Get(Client, clientId).then((res) => {
      if (res.status === 200) {
        getClientList(res.data.result);
      }
    });
  };
  const formatWithIcon = (cell, row) => {
    return (
      <span className="icon icon-sm">
        <FontAwesomeIcon icon={faEye} className="me-2" title="View Details" />
        <Link
          to={{
            pathname: "/client/AddUpdateCompany/",
            state: { clientId: row.clientID },
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
            onClick={() => deleteCompany(row.clientID)}
          />
        </Link>
      </span>
    );
  };
  const TableHeaderColumn = [
    {
      dataField: "clientName",
      text: "Client Name",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "firstName",
      text: "FirstName",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
      filter: dateFilter(),
    },
    {
      dataField: "gstvatid",
      text: "GstVaT Id",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "taxID",
      text: "taxId",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "SubscriberOfficialName",
      text: "Subscriber Name",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "phone",
      text: "Phone",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "address1",
      text: "Address1",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "address2",
      text: "Address2",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "city",
      text: "City",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "zipCode",
      text: "ZipCode",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "clientID",
      text: "Action",
      sort: true,
      formatter: formatWithIcon,
    },
  ];

  const deleteCompany = (companyId) => {
    companyService.Delete(companyId).then((res) => {
      if (res.status === 200) {
        getAllClientList();
      } else {
        alert(res.data.responseMessage);
      }
    });
  };

  const option = {
    custom: true,
    totalSize: companyList.length,
  };

  return (
    <>
      <Link to={"/client/AddUpdateClient/"} className="btn btn-success">
        Add Client
      </Link>
      <PaginationProvider pagination={paginationFactory(option)}>
        {({ paginationProps, paginationTableProps }) => (
          <div>
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={companyList}
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
