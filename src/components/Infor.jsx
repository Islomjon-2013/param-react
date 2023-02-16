import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Infor = () => {
  const [text, setText] = useState({});
  const name = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${name}`)
      .then((res) => {
        setText(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>{name.name}</h1>
      <h2>{text.name}</h2>
      <h2>{text.username}</h2>
    </div>
  );
};

export default Infor;
