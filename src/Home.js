// usestate and useffect hook
import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  // using the useState hook to create a state variable
  const [blogs, changeBlogs] = useState(null);
  //   loading pending data
  const [pending, changePending] = useState(true);
  // Error message
  const [error, changeError] = useState(null);

  // useEffect hook to fetch data/db.json data
  useEffect(() => {
    //setTimeout to simulate a delay
    setTimeout(() => {
      fetch("http://localhost:8800/blogs")
        .then((res) => {
          if (!res.ok) {
            //checking if response is ok
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          changeBlogs(data);
          changePending(false); //pending data is false if data is fetched
          changeError(null); //error is null if data is fetched
        })
        //catching any error
        .catch((err) => {
          changePending(false);
          changeError(err.message);
        });
    }, 500); //delay of 500ms
  }, []);

  return (
    <div className="home">
      {/* error message */}
      {error && <div>{error}</div>}
      {/* pending message */}
      {pending && <div>Loading...</div>}
      {/* using props to pass data to bloglist */}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
