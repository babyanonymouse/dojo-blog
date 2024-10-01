import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    pending,
    error,
  } = useFetch("http://localhost:8800/blogs/" + id); //using custom hook
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8800/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
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
