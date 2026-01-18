// usestate and useffect hook
import useFetch from "./useFetch.ts";
import Bloglist from "./BlogList.tsx";
const Home = () => {
  const {
    data: blogs,
    pending,
    error,
  } = useFetch(`${import.meta.env.VITE_API_URL}/blogs`);

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
