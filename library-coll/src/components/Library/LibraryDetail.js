//Library
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LibraryDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8080/librarys/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8080/librarys/${id}`, {
        name: String(inputs.name),
        location: String(inputs.author),
        number: String(inputs.description),
        isaval: String(inputs.price),
        openhr: String(inputs.image),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/librarys"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
// id, title, location, number, nonaval, status
  return (
    <div>
      {inputs && (
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
            <FormLabel>Name</FormLabel>
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
              Update Library
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default LibraryDetail;