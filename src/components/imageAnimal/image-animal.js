import React from "react";
import { useState, useEffect } from "react";

const ImageAnimal = (inputValue) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.serpdog.io/images?api_key=63b36f93ca2ec8a5ed7b7e85&q=${inputValue}&gl=us`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.image_results);
        setImage(response.image_results[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [inputValue]);

  return image.image;
};

export default ImageAnimal;
