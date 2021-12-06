import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"



function CreateAccount() {

        const initialValues = {
            fullName: "",
            email: "",
            password: ""
        };
/*
        const validationSchema = Yup.object().shape({
            fullName: Yup.string().required("Name is required"),
            email: Yup.string().required("Email is required"),
            password: Yup.string().min(5).max(30).required("Password is required"),

        }); */

        const onSubmit = (data) => {
            axios.post("http://localhost:3001/posts", data).then((response) => {
             console.log("it worked");
        });
    };
    return (
        
        <div >
            <Formik className = "center p" initialValues={initialValues} onSubmit= {onSubmit} >
                <Form> 

     
                <div className="center">
                

                    <label>Enter your name: </label>
                    <Field id = "inputCreateAccount" name="fullname" placeholder=""/>
                     
                        
                        <h3> </h3>
                    <label>Enter your email: </label>
                    <Field id = "inputCreateAccount" name="email" placeholder=""/>
                    <h3> </h3>

                    <label>Enter your password: </label>
                    <Field id = "inputCreateAccount" name="password" placeholder=""/>
                     <h3> </h3>
                    <button type="submit" >Create Post</button>
                  </div> 
                  </Form>
            </Formik>
        </div>
    )
}


export default CreateAccount
