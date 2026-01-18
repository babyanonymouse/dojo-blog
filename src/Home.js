// usestate and useffect hook
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    pending,
    error,
  } = useFetch(`${process.env.REACT_APP_API_URL}/blogs`);

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
