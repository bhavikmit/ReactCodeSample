import React, { Component } from "react";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import countryService from "../../services/countryService";
import currencyService from "../../services/currencyService";
import companyService from "../../services/companyService";

export default class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      email: "",
      website: "",
      tradingName: "",
      companyNativeCurrencyId: 0,
      registrationNo: "",
      taxId: "",
      gstvatId: "",
      contactNumber: "",
      companyStartDate: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      countryId: 0,
    };
  }

  render() {
    return (
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <Row>
            <Col className="col-md-3">
              <Form.Group id="idCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  name="companyName"
                  value={this.state.companyName}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col className="col-md-4">
              <Form.Group id="idCompanyEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={this.state.email}
                  type="email"
                />
              </Form.Group>
            </Col>

            <Col className="col-md-4">
              <Form.Group id="idCompanyWebsite">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  name="website"
                  value={this.state.website}
                  type="text"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-3">
              <Form.Group id="idTradingName">
                <Form.Label>Trading Name</Form.Label>
                <Form.Control
                  name="tradingName"
                  value={this.state.tradingName}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col className="col-md-4">
              <Form.Group id="idCompanyEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={this.state.email}
                  type="email"
                />
              </Form.Group>
            </Col>

            <Col className="col-md-4">
              <Form.Group id="idCompanyEmail">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  name="website"
                  value={this.state.website}
                  type="email"
                />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
