// state hook
import { useState } from "react";

const Home = () => {
    // using the useState hook to create a state variable
  const [name, changeName] = useState("mario");
  const [age, changeAge] = useState(25);

  const handleClick = (name) => {
    changeName("Luigi");
    changeAge(30);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={() => handleClick("mario")}>click me</button>
    </div>
  );
};

export default Home;
