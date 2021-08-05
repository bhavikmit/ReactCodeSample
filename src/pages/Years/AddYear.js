import React from 'react';  
import axios from 'axios';  
import userServices from '../../services/userServices';
import { constants } from 'fs';
//import { email, required } from "../../components/validation";
// import '../Student/Addstudent.css'  
// import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import swal from 'sweetalert';

class AddYear extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
  yearid: this.props.match.params.yearid, 
}  
}   
handleSubmit=(e)=>{  
  e.preventDefault();
  debugger;
    const obj = {
      YearId: 0,
      YearStartMonth: parseInt(e.target["YearStartMonth"].value),
      YearEndMonth: parseInt(e.target["YearEndMonth"].value),
    };
  userServices.AddUpdateYear(obj).then((res) => {
    if (res.status === 200) {      
      swal({
        title: "success",
        text: res.data.responseMessage,
        icon: "success",        
      });
      this.props.history.push('/Years/YearList')
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
  <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Year</h5>
        <Form id="AddYear-form" onSubmit={(e) => this.handleSubmit(e)}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>YearStartMonth</Form.Label>
                <Form.Control required type="text" name="YearStartMonth" placeholder="Enter YearStartMonth" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>YearEndMonth</Form.Label>
                <Form.Control required type="text" name="YearEndMonth" placeholder="Enter YearEndMonth" />
              </Form.Group>
            </Col>
          </Row>
           <div className="mt-3">
            {/* <Button variant="primary">Save</Button> */}
            <button className="btn btn-success">Submit</button>  
          </div>
        </Form>
      </Card.Body>
    </Card>
    </div>
  //  <Container className="App">  
  //   <h4 className="PageHeading">Enter Year Informations</h4>  
  //   <Form className="form"  id="register-form" onSubmit={(e) => this.handleSubmit(e)}>  
  //     <Col>         
  //       <FormGroup row>  
  //         <Label for="address" sm={2}>YearStartMonth</Label>  
  //         <Col sm={10}>  
  //           <Input type="text" name="YearStartMonth"   placeholder="Enter YearStartMonth" />  
  //         </Col>  
  //       </FormGroup>  
  //       <FormGroup row>  
  //         <Label for="yearEndMonth" sm={2}>YearEndMonth</Label>  
  //         <Col sm={10}>  
  //           <Input type="text" name="YearEndMonth"    placeholder="Enter YearEndMonth" />  
  //         </Col>  
  //       </FormGroup>          
  //     </Col>  
  //     <Col>  
  //       <FormGroup row>  
  //         <Col sm={5}>  
  //         </Col>  
  //         <Col sm={1}>  
  //         <button className="btn btn-success">Submit</button>  
  //         </Col>  
  //         <Col sm={1}>  
  //           <Button color="danger">Cancel</Button>{' '}  
  //         </Col>  
  //         <Col sm={5}>  
  //         </Col>  
  //       </FormGroup>  
  //     </Col>  
  //   </Form>  
  // </Container>  
);  
}  
   
}  
   
export default AddYear;  