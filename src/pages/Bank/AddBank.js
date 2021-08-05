import React from 'react';  
import axios from 'axios';  
import userServices from '../../services/userServices';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import swal from 'sweetalert';

class AddBank extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
  bankid: this.props.match.params.bankid, 
}  
}   
handleSubmit=(e)=>{  
  e.preventDefault();
  debugger;
    const obj = {  
        BankID: 0,   
        BankName: e.target["BankName"].value      
    };
  userServices.AddUpdateBank(obj).then((res) => {
    if (res.status === 200) {      
      swal({
        title: "success",
        text: res.data.responseMessage,
        icon: "success",        
      });
      this.props.history.push('/Bank/BankList')
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
        <h5 className="mb-4">Add Bank</h5>
        <Form id="Addbank-form" onSubmit={(e) => this.handleSubmit(e)}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="bnkName">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control required type="text" name="BankName" placeholder="Enter BankName" />
              </Form.Group>
            </Col>            
          </Row>
           <div className="mt-3">           
            <button className="btn btn-success">Submit</button>  
          </div>
        </Form>
      </Card.Body>
    </Card>
    </div>
);  
}  
   
}  
   
export default AddBank;  