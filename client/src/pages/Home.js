import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
//allows you to run a function when the page rerenderes

function Home() {
    const[listOfUsers, setListOfUsers] = useState([]);
    
    useEffect(() => {
     axios.get("http://localhost:3001/posts").then((response) => {
         setListOfUsers(response.data);

     });
    }, []);
    return (
        <div>
            {listOfUsers.map((value,key) => {
    return (
    <div classname = "users">
        <div classname = "names">
            {value.fullname} 
        </div>
        <div classname = "emails">
            {value.email} 
        </div>
    </div>
    );
  })};
        </div>
    );
};

export default Home
