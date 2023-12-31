import React, { useState } from "react";
import { IMAGE_URL } from "./constants";
import Header from "./Header";

const Body = () => {
  let [index, setIndex] = useState(0);
  const country = "India";

  const handlePrevImage = () => {
    // setIndex(!index ? IMAGE_URL.length - 1 : index - 1);
    index === 0 ? setIndex(IMAGE_URL.length - 1) : setIndex(index - 1);
  };

  const handleNextImage = () => {
    setIndex((index + 1) % IMAGE_URL.length);
  };

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     handleNextImage();
  //   }, 2000);

  //   return () => clearTimeout(timeOut);
  // }, [index]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handlePrevImage}>Previous</button>

      <img src={IMAGE_URL[index]} alt="wallpaper" />
      <button onClick={handleNextImage}>Next</button>
      <div>
        <Header country={country} />
      </div>
    </div>
  );
};

export default Body;
