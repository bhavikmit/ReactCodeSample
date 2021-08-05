import React from "react";
// import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";
import axios from "axios";
import userServices from "../../services/userServices";
import swal from "sweetalert";

// import '../Student/Addstudent.css'
class EditYear extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRollNo = this.onChangeRollNo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      YearId: 0,
      YearStartDate: 0,
      YearsEndDate: 0,
    };
  }

  componentDidMount() {
    userServices
      .GetYearByYearID(parseInt(this.props.match.params.YearID))
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            YearId: parseInt(res.data.result.yearId),
            YearStartDate: parseInt(res.data.result.yearStartMonth),
            YearsEndDate: parseInt(res.data.result.yearEndMonth),
          });
        }
      });
  }

  onChangeName(e) {
    this.setState({
      YearStartDate: e.target.value,
    });
  }
  onChangeRollNo(e) {
    this.setState({
      YearsEndDate: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      YearId: parseInt(this.props.match.params.YearID),
      YearStartMonth: parseInt(this.state.YearStartDate),
      YearEndMonth: parseInt(this.state.YearsEndDate),
    };
    userServices.AddUpdateYear(obj).then((res) => {
      if (res.status === 200) {
        swal({
          title: "success",
          text: res.data.responseMessage,
          icon: "success",
        });
        this.props.history.push("/Years/YearList");
      } else {
        swal({
          title: "Error",
          text: "Data not Saved",
          icon: "error",
        });
      }
    });
  }
  render() {
    return (
      <div>
        <h5 className="mb-4">Update Year</h5>
        <Form id="EditYear-form" onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>YearStartMonth</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="YearStartDate"
                  value={this.state.YearStartDate}
                  onChange={this.onChangeName}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>YearEndMonth</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="YearsEndDate"
                  value={this.state.YearsEndDate}
                  onChange={this.onChangeRollNo}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            {/* <Button variant="primary">Save</Button> */}
            <button className="btn btn-success">Submit</button>
          </div>
        </Form>
      </div>
      // <Container className="App">

      //  <h4 className="PageHeading">Update Student Informations</h4>
      //     <Form className="form" onSubmit={this.onSubmit}>
      //         <Col>
      //             <FormGroup row>
      //                 <Label for="name" sm={2}>Name</Label>
      //                 <Col sm={10}>
      //                     <Input type="text" name="Name" value={this.state.YearId}
      //                     placeholder="Enter Name" />
      //                 </Col>
      //             </FormGroup>
      //             <FormGroup row>
      //                 <Label for="YearStartDate" sm={2}>RollNo</Label>
      //                 <Col sm={10}>
      //                     <Input type="text" name="YearStartDate" value={this.state.YearStartDate} onChange={this.onChangeName} />
      //                 </Col>
      //             </FormGroup>
      //              <FormGroup row>
      //                 <Label for="YearsEndDate" sm={2}>Class</Label>
      //                 <Col sm={10}>
      //                     <Input type="text" name="YearsEndDate" value={this.state.YearsEndDate} onChange={this.onChangeRollNo}  />
      //                 </Col>
      //             </FormGroup>
      //         </Col>
      //         <Col>
      //             <FormGroup row>
      //                 <Col sm={5}>
      //                 </Col>
      //                 <Col sm={1}>
      //               <Button type="submit" color="success">Submit</Button>{' '}
      //                 </Col>
      //                 <Col sm={1}>
      //                     <Button color="danger">Cancel</Button>{' '}
      //                 </Col>
      //                 <Col sm={5}>
      //                 </Col>
      //             </FormGroup>
      //         </Col>
      //     </Form>
      // </Container>
    );
  }
}

export default EditYear;
