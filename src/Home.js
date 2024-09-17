// usestate and useffect hook
import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  // using the useState hook to create a state variable
  const [blogs, changeBlogs] = useState(null);

  // useEffect hook to fetch data/db.json data
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        changeBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {/* using props to pass data to bloglist */}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
      {/* filter Mario's blogs display */}
      {/* {blogs && (
        <Bloglist
          blogs={blogs.filter((blog) => blog.author === "Mario")}
          title={"Mario's Blogs"}
        />
      )} */}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Home;
