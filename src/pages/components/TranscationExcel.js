import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Form, Button } from "@themesberg/react-bootstrap";

import moment from "moment";

export const TranscationExcel = (props) => {
  return props.datasource.map((o, i) => {
    debugger;

    return (
      <>
        <tr key={o.key}>
          <td>
            {o.transactiondate}
            {/* <Form.Group>
              <Form.Control
                type="date"
                name="transactiondate"
                data-id={i}
                id="transactiondate"
                value={o.transactiondate}
                disabled={o.isEdit === false ? true : false}
                onChange={(event) => props.handleChange(event)}
              ></Form.Control>
            </Form.Group> */}
          </td>
          <td>
            <Form.Group>
              <Form.Control
                type="text"
                name="narration"
                data-id={i}
                id="narration"
                value={o.narration}
                disabled={o.isEdit === false ? true : false}
                onChange={(event) => props.handleChange(event)}
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group>
              <Form.Control
                type="text"
                name="refrence"
                data-id={i}
                id="refrence"
                value={o.refrence}
                disabled={o.isEdit === false ? true : false}
                onChange={(event) => props.handleChange(event)}
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group>
              <Form.Control
                type="number"
                name="credit"
                data-id={i}
                id="credit"
                value={o.credit}
                disabled={o.isEdit === false ? true : false}
                onChange={(event) => props.handleChange(event)}
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group>
              <Form.Control
                type="number"
                name="debit"
                data-id={i}
                id="debit"
                value={o.debit}
                disabled={o.isEdit === false ? true : false}
                onChange={(event) => props.handleChange(event)}
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group>
              <Form.Control
                type="number"
                name="closingbalance"
                data-id={i}
                id="closingbalance"
                value={o.closingbalance}
                disabled={o.isEdit === false ? true : false}
                onChange={(event) => props.handleChange(event)}
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group>
              <Form.Select
                name="transcationId"
                data-id={i}
                id="idtranscation"
                onChange={(event) => props.handleChange(event)}
                value={props.transcationId}
              >
                <option value={props.transcationId}>
                  Please select transcation
                </option>
                {o.transaction.map((value, index) => {
                  return (
                    <option value={value.transactionTypeID}>
                      {value.transactionTypeName}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <span className="errorMessage">
              {o.errors !== null ? o.errors.transcationId : o.errors}
            </span>
          </td>
          <td>
            <Form.Group>
              <Form.Select
                name="clientId"
                id="idclientId"
                data-id={i}
                onChange={(event) => props.handleChange(event)}
                value={props.clientId}
                disabled={parseInt(o.vendorId) > 0 ? true : false}
              >
                <option value="0">Please select client</option>
                {o.client.map((value, index) => {
                  return (
                    <option value={value.clientId}>{value.clientName}</option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <span className="errorMessage">{o.errors.clientId}</span>
          </td>
          <td>
            <Form.Group>
              <Form.Select
                name="vendorId"
                id="idvendor"
                data-id={i}
                onChange={(event) => props.handleChange(event)}
                value={props.vendorId}
                disabled={parseInt(o.clientId) > 0 ? true : false}
              >
                <option value="0">Please select vendor</option>
                {o.vendor.map((value, index) => {
                  return (
                    <option value={value.vendorId}>{value.vendorName}</option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <span className="errorMessage">
              {o.errors !== null ? o.errors.vendorId : o.errors}
            </span>
          </td>
          <td>
            <Form.Group>
              <Form.Control
                name="note"
                id="note"
                data-id={i}
                onChange={(event) => props.handleChange(event)}
                value={props.note}
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Button
              varriant="secondary"
              onClick={(event) => props.handleClick(event)}
              data-id={i}
            >
              Edit
            </Button>
          </td>
        </tr>
      </>
    );
  });
};
