import axios from "axios";

export default {
    Fetch: function(method){
        fetch(method)
        .then((res)=> res.json())
        .then(
            (result) => {
                return result.items;
            },
            (error) => {}
        );
    },

    Get : async function (method){
        await axios.get(method).then((res)=> {
            return res.data;
        });
    },

    Post : async function(method,parameter){
        axios.post(method,{parameter}).then((res)=>{
            return res.data;
        });
    },

    Exception : function(error){
        if(error.response){
            if(error.response.status === 400){
                error.response.data = {
                    responseMessage : "The specific request does not found."
                }
            }
            return error.response;
        }else if(error.request){
            return error.request;
        }else{
            return error.message;
        }
    },

};


