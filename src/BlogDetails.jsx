import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    pending,
    error,
  } = useFetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`); //using custom hook
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {pending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          ></div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
