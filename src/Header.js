import { useState } from "react";

const Header = ({ country }) => {
  const [name, setName] = useState("Deepika");

  const handleChangeName = () => {
    setName("Arun");
  };

  return (
    <div>
      <h1>
        Hello, I am {name} and I am from {country}.
      </h1>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
};

export default Header;
