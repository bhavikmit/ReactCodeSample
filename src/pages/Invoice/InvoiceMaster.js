import React from "react";
import { Invoicetax } from "./Invoicetax";
import { GenerateTaxInvoice } from "./GenerateTaxInvoice";
import { ViewTaxInvoice } from "./ViewTaxInvoice";
import { GeneratePdf } from "./GeneratePdf";
import userServices from "../../services/userServices";
import { v4 as uuidv4 } from "uuid";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { Component } from "react";
import Select from "react-select";
import jsPDF from "jspdf";
import "../../assets/style.css";
import invoiceService from "../../services/invoiceService";

import Moment from "moment";

export default class InvoiceMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldList: [
        {
          index: uuidv4(),
          itemname: [],
          itemid: 0,
          quantity: 0,
          rate: 0.0,
          amount: 0.0,
          totalamount: 0.0,
          description: "",
          errors: {},
        },
      ],
      clientName: [],
      invoiceNumber: "",
      invoiceID:
        props.location.state !== undefined ? props.location.state.invoiceID : 0,
      reference: "",
      clientDetail: "",
      invoiceDate: new Date(),
      invoiceDueDate: new Date(),
      currencyList: [],
      clientId: 0,
      currencyId: 0,
      countryTaxList: [],
      countryTaxSelectedOptions: [],
      companyid: 0,
      fieldNameList: [],
      countryTaxId: 0,
      grandTotal: 0,
      totalTax: 0,
      columnHeader: [
        "Item Name",
        "Description",
        "Quantity",
        "Rate",
        "Amount",
        "TotalAmount",
        "Action",
      ],
      isGenerateInvoice: false,
      isViewInvoice: false,
      errors: {},
    };
  }

  componentDidMount() {
    let companyId = window.sessionStorage.getItem("companyId");
    this.setState({
      companyId: companyId,
    });
    let invoiceId = this.state.invoiceID;
    //this.getInvoiceItem(2);

    if (invoiceId !== undefined && invoiceId !== 0) {
      //this.getListOfInvoiceDataById(invoiceId);
    } else {
      //this.invoiceInitialData();

      //this.getCountryTax(companyId);
      //this.getInvoiceItem(1);
    }
  }

  getListOfInvoiceDataById = (invoiceID) => {
    invoiceService.GetInvoiceViewDetailsById(invoiceID).then((res) => {
      if (res.status === 200) {
        let objcountryTaxSelectedOptions = [];

        let objFieldList = [];
        let objHeader = [...this.state.columnHeader];

        this.bindClientNameAndCurrencyList(res.data.result);
        this.bindCountryTax(res.data.result.getCountryTaxList);

        let objTaxList = this.state.countryTaxList;

        let dd = this.state.fieldNameList;

        res.data.result.invoiceDetailList.forEach(function (i, o) {
          i.invoiceTaxDetailsJsonModel.forEach(function (index, oi) {
            if (o === 0) {
              let objCountry = objTaxList.find(
                (x) => x.value === index.countryTaxID
              );

              objcountryTaxSelectedOptions.push({
                value: objCountry.value,
                label: objCountry.label,
                taxrate: objCountry.taxrate,
              });
              objHeader.splice(5, 0, objCountry.label);
            }
          });
        });
        let grandTotal = 0;
        let grandTax = 0;
        res.data.result.invoiceDetailList.forEach(function (i, o) {
          let totalamount = 0;
          let taxamount = 0;
          i.invoiceTaxDetailsJsonModel.forEach(function (index, oi) {
            let objCountry = objTaxList.find(
              (x) => x.value === index.countryTaxID
            );

            i[objCountry.label.toLowerCase()] = index.taxAmount;
            taxamount = taxamount + index.taxAmount;
          });

          i["index"] = uuidv4();
          delete i["itemName"];
          i["itemname"] = dd;
          i["itemid"] = i.itemID;
          delete i["itemID"];
          i["errors"] = null;
          totalamount =
            totalamount + parseFloat(i["amount"]) + parseFloat(taxamount);
          i["totalamount"] = parseFloat(totalamount).toFixed("2");
          grandTax = parseFloat(grandTax) + parseFloat(taxamount);
          grandTotal = parseFloat(grandTotal) + parseFloat(totalamount);
          objFieldList.push(i);
        });

        this.setState({
          clientId: res.data.result.clientID,
          invoiceNumber: res.data.result.invoiceNumber,
          reference: res.data.result.reference,
          clientDetail: res.data.result,
          invoiceDate: Moment(res.data.result.invoiceDate).format("YYYY-MM-DD"),
          invoiceDueDate: Moment(res.data.result.invoiceDueDate).format(
            "YYYY-MM-DD"
          ),
          invoiceID: res.data.result.invoiceID,
          currencyId: res.data.result.invoiceCurrencyID,
          countryTaxSelectedOptions: objcountryTaxSelectedOptions,
          columnHeader: objHeader,
          fieldList: objFieldList,
          grandTotal: grandTotal.toFixed("2"),
          totalTax: grandTax.toFixed("2"),
        });
      } else {
      }
    });
  };

  invoiceInitialData = () => {
    invoiceService.GetLastGeneratedInvoice().then((res) => {
      if (res.status === 200) {
        this.bindClientNameAndCurrencyList(res.data.result);
      } else {
        //  alert(res.data.responseMessage);
      }
    });
  };

  bindClientNameAndCurrencyList = (result) => {
    this.setState({
      invoiceNumber: result.invoiceNumber,
      clientName: result.clientDDLList.map(
        (o) =>
          new Object({
            clientId: o.clientID,
            clientName: o.clientName,
          })
      ),

      currencyList: result.currencyDDLList.map(
        (p) =>
          new Object({
            currencyId: p.currencyID,
            currencyName: p.currencyName,
          })
      ),
    });
  };
  generateInvoice = () => {
    this.setState({
      isGenerateInvoice: true,
    });
  };
  getInvoiceItem = (i) => {
    let list = [];
    let listOfItem = [];

    invoiceService.GetInvoiceItem().then((res) => {
      if (i === 1) {
        if (res.status === 200) {
          let copyOfField = [...this.state.fieldList];

          res.data.result.map((i) => {
            list.push({ itemId: i.invoiceItemId, itemName: i.invoiceItemName });
          });

          copyOfField.map((o) => {
            o.itemname = list;
          });

          this.setState({
            fieldList: copyOfField,
          });
        } else {
          alert(res.data.responseMessage);
        }
      } else {
        if (res.status === 200) {
          res.data.result.map((i) => {
            listOfItem.push({
              itemId: i.invoiceItemId,
              itemName: i.invoiceItemName,
            });
          });

          this.setState({
            fieldNameList: listOfItem,
          });
        }
      }
    });
  };

  getCountryTax = (companyId) => {
    userServices.GetCountryTaxList(companyId).then((res) => {
      if (res.status === 200) {
        this.bindCountryTax(res.data.result);
      } else {
        alert(res.data.responseMessage);
      }
    });
  };

  bindCountryTax = (result) => {
    let objcountryTaxList = [];
    result.map((o, i) => {
      objcountryTaxList.push({
        value: o.countryTaxID,
        label: o.taxName + "" + o.taxRate + "%",
        taxrate: o.taxRate,
      });
    });

    this.setState({
      countryTaxList: objcountryTaxList,
    });
  };

  getClientDetailById = (event) => {
    let cid = event.target.value;

    userServices.GetClientDetailsById(event.target.value).then((res) => {
      if (res.status === 200) {
        this.setState({
          clientDetail: res.data.result,
          clientId: cid,
        });
      } else {
        alert(res.data.responseMessage);
      }
    });
  };

  addNewRow = () => {
    let list = [];
    this.state.fieldList.map((o) => {
      list = o.itemname;
    });

    this.setState((prevState) => ({
      fieldList: [
        ...prevState.fieldList,
        {
          index: uuidv4(),
          itemname: list,
          itemid: 0,
          quantity: 0,
          rate: 0.0,
          amount: 0.0,
          totalamount: 0.0,
          description: "",
          errors: {},
        },
      ],
    }));
  };

  deleteRow = (iindex) => {
    this.setState({
      fieldList: this.state.fieldList.filter((item) => item.index !== iindex),
    });
  };
  submitChange = (e) => {
    e.preventDefault();
    this.resetInputFild();

    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    if (fields.clientId === 0) {
      errors["clientId"] = "*Please enter your username.";
      formIsValid = false;
    }

    if (fields.reference === "") {
      errors["reference"] = "*Please enter reference.";
      formIsValid = false;
    }

    if (fields.invoiceDate === "") {
      errors["invoiceDate"] = "*Please select invoice date.";
      formIsValid = false;
    }

    if (fields.invoiceDueDate === "") {
      errors["invoiceDueDate"] = "*Please select invoice Duedate.";
      formIsValid = false;
    }

    if (fields.currencyId === 0) {
      errors["currencyId"] = "*Please select currency.";
      formIsValid = false;
    }

    let invoiceDate = new Date(fields.invoiceDate);
    let dueDate = new Date(fields.invoiceDueDate);
    if (dueDate.getDate() < invoiceDate.getDate()) {
      errors["invoiceDueDate"] = "*Due date is greather than invoice date.";
      formIsValid = false;
    }

    fields.fieldList.map((o, i) => {
      this.state.columnHeader.map((c, ii) => {
        let fieldName = c.replace(/ /g, "").toLowerCase();

        let validateField = o[fieldName];

        if (fieldName === "itemname" || fieldName === "description") {
          if (validateField === "") {
            o.errors[fieldName] = "Please enter " + fieldName;
            formIsValid = false;
          }
        } else if (fieldName === "quantity" || fieldName === "rate") {
          if (validateField < 1) {
            o.errors[fieldName] = fieldName + " must be greather than 0";
            formIsValid = false;
          }
        } else {
          if (validateField === 0) {
            o.errors[fieldName] = "Please enter " + fieldName;
            formIsValid = false;
          }
        }
      });
    });

    if (formIsValid === false) {
      this.setState({
        errors: errors,
      });
      return formIsValid;
    }

    let taxName = [];
    this.state.countryTaxSelectedOptions.map((i, o) => {
      let taxId = this.state.countryTaxList.find(
        (x) => x.label === i.label
      ).value;

      taxName.push({
        Id: i.label.toLowerCase(),
        TaxId: taxId,
      });
    });

    let invoiceList = [];
    this.state.fieldList.map((o, i) => {
      let taxDetails = [];
      taxName.map((t, i) => {
        taxDetails.push({
          taxAmount: parseFloat(o[t.Id]),
          countryTaxId: t.TaxId,
        });
      });

      invoiceList.push({
        rate: parseFloat(o.rate),
        amount: parseFloat(o.amount),
        quantity: parseFloat(o.quantity),
        description: o.description,
        itemId: parseInt(o.itemid),
        invoiceTaxDetailsJsonModel: taxDetails,
      });
    });

    let invoiceModel = {
      invoiceID: this.state.invoiceID,
      companyFinancialYearID: 1,
      reference: this.state.reference,
      companyId: parseInt(this.state.companyId),
      invoiceDate: this.state.invoiceDate,
      invoiceDueDate: this.state.invoiceDueDate,
      invoiceCurrencyTotalAmount: parseFloat(this.state.grandTotal),
      clientId: parseFloat(this.state.clientId),
      invoiceNumber: this.state.invoiceNumber,
      invoiceCurrencyID: parseFloat(this.state.currencyId),
      invoiceDetailList: invoiceList,
    };

    invoiceService.AddInvoice(invoiceModel).then((res) => {
      if (res.status === 200) {
        alert(res.data.responseMessage);

        this.invoiceInitialData();
        this.setState({
          clientDetail: "",
        });

        this.props.history.push("/invoice/invoicelist");
      } else {
        alert(res.data.responseMessage);
      }
    });
  };

  resetInputFild = () => {
    let fields = this.state;
    let errors = {};

    errors["clientId"] = 0;
    errors["reference"] = "";
    errors["invoiceDate"] = "";
    errors["invoiceDueDate"] = "";
    errors["currencyId"] = 0;

    // this.state.fieldList.map((o, i) => {
    //   o.errors["itemname"] = [];
    //   o.errors["quantity"] = "";
    //   o.errors["rate"] = "";
    //   o.errors["description"] = "";
    // });

    this.setState({
      errors: errors,
    });
  };

  handleChange = (e) => {
    if (
      [
        "clientId",
        "invoiceNumber",
        "reference",
        "clientName",
        "invoiceDate",
        "invoiceDueDate",
        "currencyId",
      ].includes(e.target.name)
    ) {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      if (this.state.fieldList.keys(e.target.name)) {
        let fieldList = [...this.state.fieldList];
        let eventName = e.target.name;
        let customData = e.target.getAttribute("data-name").split(" ");

        customData = customData.length > 0 ? customData[0] : customData;

        let taxCounta = [];
        this.state.countryTaxSelectedOptions.map((o) => {
          taxCounta.push({
            Id: o.label.toLowerCase(),
            TaxName: o.label.toLowerCase(),
            TaxRate: o.taxrate,
          });
        });

        let taxName = this.state.countryTaxSelectedOptions;
        let customAttribute = taxName.find((x) => x.label === customData);

        if (customAttribute !== undefined) {
          customAttribute = taxName.find((x) => x.label === customData).label;
        }
        if (
          eventName === "quantity" ||
          eventName === "rate" ||
          (customAttribute !== "" && customAttribute !== undefined)
        ) {
          if (
            fieldList[e.target.dataset.id]["quantity"] === 0 ||
            fieldList[e.target.dataset.id]["rate"]
          ) {
            fieldList[e.target.dataset.id]["amount"] = 0;
            fieldList[e.target.dataset.id]["amount"] =
              parseFloat(fieldList[e.target.dataset.id]["quantity"]) *
              parseFloat(fieldList[e.target.dataset.id]["rate"]);

            let taxAmount = [];
            let sumofTax = 0;
            taxCounta.map((o, i) => {
              fieldList[e.target.dataset.id][o.Id] =
                parseFloat(
                  fieldList[e.target.dataset.id]["amount"] * o.TaxRate
                ) / 100;

              taxAmount.push(fieldList[e.target.dataset.id][o.Id]);
            });

            taxAmount.forEach(function (element, i) {
              sumofTax = sumofTax + element;
            });

            fieldList[e.target.dataset.id]["totalamount"] =
              fieldList[e.target.dataset.id]["amount"] + sumofTax;
          } else {
            taxCounta.map((o, i) => {
              fieldList[e.target.dataset.id][o.Id] = 0;
            });
            fieldList[e.target.dataset.id]["amount"] = 0;

            fieldList[e.target.dataset.id]["totalamount"] = 0;
          }
        }

        let list = [];
        if (eventName === "itemname") {
          fieldList.map((o) => {
            list = o.itemname;
          });

          fieldList[e.target.dataset.id]["itemid"] = e.target.value;
          fieldList[e.target.dataset.id][e.target.name] = list;
        } else {
          fieldList[e.target.dataset.id][e.target.name] = e.target.value;
        }

        let grandTotal = 0;
        let amount = 0;
        let sumofTax = 0;
        fieldList.forEach(function (a, i) {
          amount = parseFloat(amount) + parseFloat(a.amount);
        });

        fieldList.forEach(function (a, i) {
          grandTotal = parseFloat(grandTotal) + parseFloat(a.totalamount);
        });

        sumofTax = parseFloat(grandTotal) - parseFloat(amount);
        this.setState({
          fieldList: fieldList,
          grandTotal: grandTotal.toFixed(2),
          totalTax: sumofTax.toFixed(2),
        });
      } else {
        this.setState({ [e.target.name]: e.target.value });
      }
    }
  };

  countryHandleChange = (countryTaxSelectedOptions, event) => {
    let cHeader = [...this.state.columnHeader];
    let fieldHeader = [...this.state.fieldList];
    let objHeader = [];

    if (event.action === "select-option") {
      var percentage = this.state.countryTaxList.filter(
        (x) => x.label === event.option.label
      );
      cHeader.splice(5, 0, event.option.label);

      fieldHeader.map((o, i) => {
        if (o["quantity"] !== 0 && o["rate"] !== null) {
          let taxAmount =
            (parseFloat(o["quantity"]) *
              parseFloat(o["rate"]) *
              parseFloat(percentage[0].taxrate)) /
            100;

          o[(5, event.option.label.toLowerCase())] = taxAmount;

          o["totalamount"] =
            parseFloat(o["totalamount"]) + parseFloat(taxAmount);
        } else {
          o[(5, event.option.label.toLowerCase())] = 0;
        }
        objHeader.push(o);
      });
    }

    if (event.action === "remove-value") {
      let dataName = event.removedValue.label;
      let indexOfValue = this.state.columnHeader.indexOf(dataName);

      cHeader.splice(indexOfValue, 1);

      fieldHeader.map((o, i) => {
        let taxAmount = o[event.removedValue.label.toLowerCase()];
        o[event.removedValue.label.toLowerCase()] = 0;

        o["totalamount"] = o["totalamount"] - parseFloat(taxAmount);

        delete o[event.removedValue.label.toLowerCase()];
        objHeader.push(o);
      });
    }

    if (event.action === "clear") {
      let indexOfValue;

      event.removedValues.map((o, i) => {
        indexOfValue = this.state.columnHeader.indexOf(o.label);
        cHeader.splice(indexOfValue, 1);
      });

      fieldHeader.map((h, ii) => {
        event.removedValues.map((o, i) => {
          let taxAmount = h[o.label.toLowerCase()];
          h[o.label.toLowerCase()] = 0;

          h["totalamount"] = h["totalamount"] - parseFloat(taxAmount);

          delete h[o.label.toLowerCase()];
        });
        objHeader.push(h);
      });
    }

    let grandTotal = 0;
    let amount = 0;
    let sumofTax = 0;
    fieldHeader.forEach(function (a, i) {
      grandTotal = parseFloat(grandTotal) + parseFloat(a.totalamount);
    });

    fieldHeader.forEach(function (a, i) {
      amount = parseFloat(amount) + parseFloat(a.amount);
    });

    sumofTax = parseFloat(grandTotal) - parseFloat(amount);
    this.setState({
      countryTaxSelectedOptions,
      columnHeader: cHeader,
      fieldList: objHeader,
      grandTotal: grandTotal.toFixed(2),
      totalTax: sumofTax.toFixed(2),
    });
  };

  viewInvoice = () => {
    this.setState({
      isViewInvoice: true,
    });
  };

  printPdf = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#printPDF"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  };

  render() {
    return (
      <>
        {this.state.isGenerateInvoice === true ? (
          <>
            {this.state.isViewInvoice === true ? (
              <Card>
                <Card.Body>
                  <ViewTaxInvoice data={this.state} printPdf={this.printPdf} />
                  <GeneratePdf data={this.state} />
                </Card.Body>
              </Card>
            ) : (
              <Card>
                <Card.Body>
                  <GenerateTaxInvoice viewInvoice={this.viewInvoice} />
                </Card.Body>
              </Card>
            )}
          </>
        ) : (
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Invoice Master</h5>
              <Form
                onSubmit={this.submitChange}
                onChange={this.handleChange}
                ref={(el) => (this.myFormRef = el)}
              >
                <Row>
                  <Form.Control
                    name="invoiceId"
                    type="hidden"
                    placeholder="Please enter reference"
                    value={this.state.invoiceID}
                  />
                  <Col md={6} className="mb-3">
                    <Form.Group id="fristname">
                      <Form.Label>
                        Client Name <span>*</span>
                      </Form.Label>
                      <Form.Select
                        name="clientId"
                        id="idSearchClient"
                        onChange={this.getClientDetailById}
                        value={this.state.clientId}
                      >
                        <option value="0">Please select client name</option>
                        {this.state.clientName.map((value, index) => (
                          <option value={value.clientId}>
                            {value.clientName}
                          </option>
                        ))}
                      </Form.Select>
                      <div className="errorMessage">
                        {this.state.errors.clientId}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group id="idInvoiceNumber">
                      <Form.Label>Invoice Number</Form.Label>
                      <Form.Control
                        name="invoiceNumber"
                        value={this.state.invoiceNumber}
                        type="text"
                        readOnly
                      />
                    </Form.Group>
                  </Col>

                  <Col md={3} className="mb-3">
                    <Form.Group id="idReference">
                      <Form.Label>
                        Reference <span>*</span>
                      </Form.Label>
                      <Form.Control
                        name="reference"
                        type="text"
                        placeholder="Please enter reference"
                        value={this.state.reference}
                      />
                      <div className="errorMessage">
                        {this.state.errors.reference}
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Client Detail</Form.Label>
                      {this.state.clientDetail !== "" && (
                        <ul className="px-0 list-unstyled">
                          <li className="text-bold-800">
                            {this.state.clientDetail.firstName +
                              " " +
                              this.state.clientDetail.lastName +
                              ", "}
                          </li>

                          <li>
                            {this.state.clientDetail.address1 +
                              ", " +
                              this.state.clientDetail.address2 +
                              " "}
                          </li>
                          <li>
                            {this.state.clientDetail.city +
                              ", " +
                              this.state.clientDetail.state +
                              ", "}
                          </li>
                          <li>{this.state.clientDetail.zipCode + ", "}</li>
                          <li>Phone: {this.state.clientDetail.phone + ", "}</li>
                          <li>Email: {this.state.clientDetail.email}</li>
                        </ul>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group id="idInvoiceDate">
                      <Form.Label>
                        Invoice Date <span>*</span>
                      </Form.Label>
                      <Form.Control
                        name="invoiceDate"
                        type="date"
                        value={this.state.invoiceDate}
                      />
                      <div className="errorMessage">
                        {this.state.errors.invoiceDate}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group id="idInoiceDueDate">
                      <Form.Label>
                        Invoice Due Date <span>*</span>
                      </Form.Label>
                      <Form.Control
                        name="invoiceDueDate"
                        type="date"
                        value={this.state.invoiceDueDate}
                      />
                      <div className="errorMessage">
                        {this.state.errors.invoiceDueDate}
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} className="mb-3">
                    <Form.Group id="idInvoiceTax">
                      <Form.Label>
                        Currency <span>*</span>
                      </Form.Label>
                      <Form.Select
                        name="currencyId"
                        id="idCurrencyList"
                        value={this.state.currencyId}
                      >
                        <option value="0">Please select currency</option>
                        {this.state.currencyList.map((value, index) => (
                          <option value={value.currencyId}>
                            {value.currencyName}
                          </option>
                        ))}
                      </Form.Select>
                      <div className="errorMessage">
                        {this.state.errors.currencyId}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="idMultipleTax">
                      <Form.Label>Tax</Form.Label>
                      <Select
                        isMulti
                        options={this.state.countryTaxList}
                        value={this.state.countryTaxSelectedOptions}
                        onChange={this.countryHandleChange}
                      ></Select>
                    </Form.Group>
                  </Col>
                </Row>
                <table className="table">
                  <thead>
                    {
                      <tr>
                        {this.state.columnHeader.map((o) => {
                          return <th>{o}</th>;
                        })}
                      </tr>
                    }
                  </thead>
                  <tbody>
                    <Invoicetax
                      add={this.addNewRow}
                      delete={this.deleteRow}
                      fieldList={this.state.fieldList}
                      handlerChange={this.handleChange}
                      columnHeader={this.state.columnHeader}
                    />
                  </tbody>
                </table>
                <div className="mt-3">
                  <div style={{ float: "right", marginRight: "110px" }}>
                    <div className="form-group row">
                      <label className="col-md-4">Total Tax</label>
                      <div class="col-md-8">
                        <Form.Control
                          type="number"
                          name="totalTax"
                          className="from-control"
                          id="idTotalTax"
                          value={this.state.totalTax}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-3">
                      <label className="col-md-4">Grand Total</label>
                      <div className="col-md-8">
                        <Form.Control
                          type="number"
                          name="grandTotal"
                          className="from-control"
                          id="idgrandTotal"
                          value={this.state.grandTotal}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Button variant="success" type="submit">
                      Save
                    </Button>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-md-4">
                    <Button
                      variant="primary"
                      type="button"
                      onClick={this.generateInvoice}
                    >
                      Generate Invoice
                    </Button>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }
}
