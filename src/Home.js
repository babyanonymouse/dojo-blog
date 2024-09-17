// state hook
import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  // using the useState hook to create a state variable
  const [blogs, changeBlogs] = useState([
    {
      title: "My new Website",
      body: "this is a new website",
      author: "Sam",
      id: 1,
    },
    {
      title: "Welcome Party",
      body: "Welcome to the party",
      author: "Mario",
      id: 2,
    },
    {
      title: "Web dev tips",
      body: "Here are some tips for web dev",
      author: "Billy",
      id: 3,
    },
    {
      title: "Disney Princess",
      body: "How to save the princess",
      author: "Mario",
      id: 4,
    },
  ]);

  return (
    <div className="home">
      {/* using props to pass data to bloglist */}
      <Bloglist blogs={blogs} title="All Blogs!" />
      {/* filter Mario's blogs display */}
      <Bloglist
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title={"Mario's Blogs"}
      />
    </div>
  );
};

export default Home;
