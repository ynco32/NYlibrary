import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Library.css";
const Library = (props) => {
  const history = useNavigate();
  const { _id, id, title, location, number, nonaval, status } = props.library;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8080/librarys/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/librarys"));
  };

  return (
    <div className="card">
      
      <p>{id}</p>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{number}</p>
      <p>{nonaval}</p>
      <p>{status}</p>
      <Button LinkComponent={Link} to={`/librarys/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Library;