import React, { useState } from "react";
import { IMAGE_URL } from "./constants";
import Header from "./Header";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  let [index, setIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(true);

  const country = "India";

  const onlineStatus = useOnlineStatus();

  const handlePrevImage = () => {
    // setIndex(!index ? IMAGE_URL.length - 1 : index - 1);
    index === 0 ? setIndex(IMAGE_URL.length - 1) : setIndex(index - 1);
  };

  const numbers = [1, 2, 3, 4, 5, 6];

  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });

  const para = evenNumbers.map((number) => {
    return <p>Even Numbers: {number}</p>;
  });

  const handleNextImage = () => {
    setIndex((index + 1) % IMAGE_URL.length);
  };

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     handleNextImage();
  //   }, 2000);

  //   return () => clearTimeout(timeOut);
  // }, [index]);

  const handleToggle = () => {
    setIsToggled((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <h1>{onlineStatus ? "Online" : "Offline"}</h1>

      <button onClick={handlePrevImage}>Previous</button>

      <img src={IMAGE_URL[index]} alt="wallpaper" />
      <button onClick={handleNextImage}>Next</button>
      <div>
        <Header country={country} />
      </div>
      <button onClick={handleToggle}>{isToggled ? "Yes" : "No"}</button>
      {para}
    </div>
  );
};

export default Body;
