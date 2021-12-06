import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useState} from 'react';
import * as Yup from 'yup';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function CreateAction() {

    const [type, a] = useState("");
  const [message, b] = useState("");
/*
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().min(5).max(30).required("Password is required"),

    }); */

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/igaction", {
            type: type, message: message
        }).then((response) => {
         console.log("it worked");
    });
};
return (
    
    <div >
    <Form>
       <Form.Group className="mb-3" controlId="formBasicIGname">
      <Form.Control type="name" placeholder="Type" onChange = {(e)=>  {
        a(e.target.value);
      }}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicIGname">
      <Form.Control type="name" placeholder="Message" onChange = {(e)=>  {
        b(e.target.value);
      }}/>
    </Form.Group>

   
    <Button onClick = {onSubmit} variant="primary" type="Create">
      Create
    </Button>
</Form>
  
    </div>
)
}


export default CreateAction;