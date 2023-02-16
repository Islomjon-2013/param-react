import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { useState } from "react";
const Photos = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {data?.map((item) => {
        return (
          <h1
            key={item.id}
            onClick={() => {
              navigate(`/about/${item.id}`);
            }}
          >
            {item.userId} {item.title}
          </h1>
        );
      })}
    </div>
  );
};

export default Photos;
