// usestate and useffect hook
import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  // using the useState hook to create a state variable
  const [blogs, changeBlogs] = useState(null);
  //   loading pending data
  const [pending, changePending] = useState(true);

  // useEffect hook to fetch data/db.json data
  useEffect(() => {
    //setTimeout to simulate a delay
    setTimeout(() => {
      fetch("http://localhost:3000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          changeBlogs(data);
          changePending(false); //pending data is false if data is fetched
        });
    }, 500);
  }, []);

  return (
    <div className="home">
      {/* pending message */}
      {pending && <div>Loading...</div>}
      {/* using props to pass data to bloglist */}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
