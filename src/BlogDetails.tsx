import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch.ts";
import Markdown from "react-markdown";

interface Blog {
  id: number;
  title: string;
  body: string;
  author: string;
}

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    pending,
    error,
  } = useFetch<Blog>(`${import.meta.env.VITE_API_URL}/blogs/${id}`); //using custom hook
  const navigate = useNavigate();

  const handleClick = () => {
    if (blog) {
      fetch(`${import.meta.env.VITE_API_URL}/blogs/${blog.id}`, {
        method: "DELETE",
      }).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <div className="blog-details">
      {pending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div className="blog-content">
            <Markdown>{blog.body}</Markdown>
          </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
