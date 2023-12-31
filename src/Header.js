import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ country }) => {
  const [name, setName] = useState("Deepika");

  const handleChangeName = () => {
    setName("Arun");
  };

  return (
    <div>
      <nav>
        <ul style={{ cursor: "pointer" }}>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <h1>
        Hello, I am {name} and I am from {country}.
      </h1>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
};

export default Header;
