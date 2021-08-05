import React, { useState, useEffect } from "react";
import userServices from "../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelopeOpen,
  faSearch,
  faSignOutAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  Row,
  Col,
  Nav,
  Form,
  Image,
  Navbar,
  Dropdown,
  Container,
  ListGroup,
  InputGroup,
} from "@themesberg/react-bootstrap";

export default (props) => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Select
            name="company"
            id="idCompany"
            onChange={props.getFinancialYear}
            value={props.companyId}
          >
            <option value="0">Please select company</option>
            {props.companyListName.map((value, index) => {
              return (
                <option value={value.companyId}>{value.companyName}</option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Form>
      <Form style={{ marginLeft: "20px" }}>
        <Form.Group>
          <Form.Select
            name="financialYear"
            id="idfinancialYear"
            onChange={props.getFinancialYearId}
            value={props.financialYearId}
          >
            <option value="0">Please select year</option>
            {props.financialYearList.map((value, index) => {
              return (
                <option value={value.countryFinancialYearId}>
                  {value.countryFinancialYearName}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Form>
    </>
  );
};
