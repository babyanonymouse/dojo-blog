import { useState } from "react";

const Create = () => {
  const [title, ChangeTitle] = useState("");
  const [body, ChangeBody] = useState("");
  const [author, ChangeAuthor] = useState("mario");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => ChangeTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => ChangeBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => ChangeAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
