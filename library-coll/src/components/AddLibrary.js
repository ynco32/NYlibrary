// import React from 'react';
// const AddLibrary = () => {
//     return <div> add lib </div>
// }


import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  //id, title, location, number, nonaval, status
  const AddLibrary = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      id:"",
      title: "" ,
      location: "",
      number: "",
      nonaval: "",
      status: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:8080/librarys", {
          id:Number(inputs.id),
          title: String(inputs.title),
          location: String(inputs.location),
          number: String(inputs.number),
          nonaval: String(inputs.nonaval),
          status: String(inputs.status),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/librarys"));
    };
  ////id, title, location, number, nonaval, status
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>title</FormLabel>
          <TextField
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="title"
          />
          <FormLabel>location</FormLabel>
          <TextField
            value={inputs.location}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="location"
          />
          <FormLabel>number</FormLabel>
          <TextField
            value={inputs.number}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="number"
          />
          <FormLabel>nonaval</FormLabel>
          <TextField
            value={inputs.nonaval}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="nonaval" 
          />
          <FormLabel>status</FormLabel>
          <TextField
            value={inputs.status}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="status"
          />
          
  
          <Button variant="contained" type="submit">
            Add New
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddLibrary;