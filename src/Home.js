// state hook
import { useState } from "react";

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
      author: "John",
      id: 2,
    },
    {
      title: "Web dev tips",
      body: "Here are some tips for web dev",
      author: "Sam",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
