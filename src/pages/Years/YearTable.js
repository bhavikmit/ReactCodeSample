import React from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
import swal from 'sweetalert';
import userServices from '../../services/userServices';
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
class Table extends React.Component {  
  constructor(props){  
    debugger;
    super(props)      
   this.test = this.state;
    } 
   
    
    DeleteYear= (e) =>{  
      e.preventDefault();   
        userServices.DeleteYear(parseInt(this.props.obj.yearId)).then((res) => {
      debugger;
      if (res.status === 200) {
        swal({
          title: "success",
          text: res.data.responseMessage,
          icon: "success",        
        }); 
        setTimeout(() => {
          window.location.reload(); 
        }, 2000);
        
      }else{
        swal({
          title: "success",
          text: "Record not deleted.",
          icon: "success",        
        });
      }      
    });  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.yearId}  
          </td>  
          <td>  
            {this.props.obj.yearStartMonth}  
          </td>  
          <td>  
            {this.props.obj.yearEndMonth}  
          </td>  
           
          <td>  
          <Link to={"/Years/EditYear/"+parseInt(this.props.obj.yearId)} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteYear} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default withRouter(Table);