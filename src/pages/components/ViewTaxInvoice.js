import React from "react";
import { Button, Image } from "@themesberg/react-bootstrap";
import Logo from "../../assets/img/logo.svg";
import { GeneratePdf } from "../components/GeneratePdf";

export const ViewTaxInvoice = (props) => {
  return (
    <>
      <div id="invoice-template">
        <div class="title-action">
          <Button onClick={() => props.printPdf()} variant="success">
            <i class="fa fa-print"></i> Print
          </Button>
        </div>
        <div id="invoice-company-details" class="row mt-4">
          <div class="col-md-6 col-sm-12 text-xs-center text-md-left">
            <Image src={Logo} className="img-responsive p-1 m-b-2" />
          </div>
          <div class="col-md-6 col-sm-12 text-xs-center text-md-right">
            <h2>INVOICE</h2>
            <p class="pb-1">{props.data.invoiceNumber}</p>
            <p class="pb-1">Reference: {props.data.reference}</p>
            <ul class="px-0 list-unstyled">
              <li>Gross Amount</li>
              <li class="lead b-font">$ {props.data.grandTotal}</li>
            </ul>
          </div>
        </div>
        <div id="invoice-customer-details" class="row">
          <div class="col-sm-12 text-xs-center text-md-left">
            <p class="text-muted"> Bill To</p>
          </div>
          <div class="col-md-6 col-sm-12 text-xs-center text-md-left">
            <ul className="px-0 list-unstyled">
              <li className="text-bold-800">
                {props.data.clientDetail.firstName +
                  " " +
                  props.data.clientDetail.lastName +
                  ", "}
              </li>

              <li>
                {props.data.clientDetail.address1 +
                  ", " +
                  props.data.clientDetail.address2 +
                  " "}
              </li>
              <li>
                {props.data.clientDetail.city +
                  ", " +
                  props.data.clientDetail.state +
                  ", "}
              </li>
              <li>{props.data.clientDetail.zipCode + ", "}</li>
              <li>Phone: {props.data.clientDetail.phone + ", "}</li>
              <li>Email: {props.data.clientDetail.email}</li>
            </ul>
          </div>
          <div class="offset-md-3 col-md-3 col-sm-12 text-xs-center text-md-left">
            <p>
              <span class="text-muted">Invoice Date :</span>{" "}
              {props.data.invoiceDate}
            </p>
            <p>
              <span class="text-muted">Due Date :</span>{" "}
              {props.data.invoiceDueDate}
            </p>
            <p>
              <span class="text-muted">Terms :</span> Payment Due On Receipt
            </p>
          </div>
        </div>
        <div id="invoice-items-details" class="pt-2">
          <div class="row">
            <div class="table-responsive col-sm-12">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th class="text-xs-left">Rate</th>
                    <th class="text-xs-left">Qty</th>

                    <th class="text-xs-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.fieldList.map((o, i) => {
                    return (
                      <>
                        <tr>
                          <th>{i}</th>
                          <th>{o.description}</th>
                          <th class="text-xs-left">{o.rate}</th>
                          <th class="text-xs-left">{o.quantity}</th>
                          <th class="text-xs-left">{o.totalamount}</th>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-7 col-sm-12 text-xs-center text-md-left">
              <div class="row">
                <div class="col-md-8">
                  <p class="lead">
                    Payment Status:
                    <u>
                      <strong id="pstatus">Due</strong>
                    </u>
                  </p>
                  <p class="lead">
                    Payment Method:{" "}
                    <u>
                      <strong id="pmethod"></strong>
                    </u>
                  </p>
                  {/* <p class="lead mt-1"><br>Note:</p> */}
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-12">
              <p class="lead">Summary</p>
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Tax</td>
                      <td class="text-right">$ {props.data.totalTax}</td>
                    </tr>
                    <tr>
                      <td class="b-font">Total</td>
                      <td class="text-right b-font">
                        {" "}
                        $ {props.data.grandTotal}
                      </td>
                    </tr>
                    <tr>
                      <td>Payment Made</td>
                      <td class="pink text-right">
                        (-) <span id="paymade">$ 0.00</span>
                      </td>
                    </tr>
                    <tr class="bg-grey bg-lighten-4">
                      <td class="b-font">Balance Due</td>
                      <td class="b-font text-right">
                        {" "}
                        <span id="paydue">$ {props.data.grandTotal}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="text-center">
                <p>Authorized person</p>
                {/* <img src="images/signature.png" alt="signature" class="sign"> */}
                <h6>(John Doe)</h6>
                {/* <p class="text-muted">Business Owner</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
