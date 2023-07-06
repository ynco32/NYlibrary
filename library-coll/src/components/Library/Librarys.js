import React, { useEffect, useState } from "react";
import "./Library";
import axios from "axios";
import Library from "./Library";
const URL = "http://localhost:8080/librarys";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Librarys = () => {
  const [librarys, setLibrarys] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setLibrarys(data.librarys));
  }, []);
  console.log(librarys);
  return (
    <div>
      <ul>
        {librarys &&
          librarys.map((library, i) => (
            <li key={i}>
              <Library library={library} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Librarys;