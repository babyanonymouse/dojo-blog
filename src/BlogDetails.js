import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    pending,
    error,
  } = useFetch("http://localhost:8800/blogs/" + id); //using custom hook

  return (
    <div className="blog-details">
      {pending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.body }}></div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;