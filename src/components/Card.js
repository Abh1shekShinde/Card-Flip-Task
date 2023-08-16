import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import "./Card.css";

export default function CardComponent() {
  const [flip, setFlip] = useState(false);
  /* useQuery takes 2 arguments : 
 1st is a unique key just like a unique key in a DB.
 2nd is a function that returns a promise which will make the request to the url 
 */
  // const imageUrl = results.data.data.photo.url;
  // {/* <img src={imageUrl} /> */}
  const randomNumber = () => {
    // console.log(Math.floor(Math.random() * 50));
    return Math.floor(Math.random() * 50);
  };

  //this is the second argument given to useQuery which is a function.
  const fetchImageAndDescription = () => {
    return axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${randomNumber()}`
    );
  };

  //Here useQuery takes 2 arguments , 1st is a key and 2nd a funtion to send request
  //useQuery also returns iserror and error from the request

  const { isLoading, data, isError, error } = useQuery(
    "image-data",
    fetchImageAndDescription
  );

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2> Loading...</h2>;
  }

  const mouseHover = () => {
    setFlip(!flip);
    console.log("hovered");
  };
  return (
    <div onMouseOver={mouseHover}>
      <h1> Card here</h1>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={data.data.photo.url}
          title={data.data.photo.title}
        ></CardMedia>
      </Card>

      <p>{JSON.stringify(data.data)} </p>
    </div>
  );
}
