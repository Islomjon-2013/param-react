import React from "react";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Images = () => {
  const [text, setText] = useState({});
  const id = useParams();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setText(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <h1>{id.name}</h1>
        <h2>{text.userId}</h2>
        <h2>{text.title}</h2>
      </div>
    </div>
  );
};

export default Images;
