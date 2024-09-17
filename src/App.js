import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = (Math.random() * 100).toFixed(0);
  // const person = { name: "Yoshi", age: 30 };
  const google = "https://google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* Arrays are not supported */}
        {/* <p>{person}</p> */}

        <p>{10}</p>
        <p>{"Hello Ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <a href={google}>Google Link</a>
      </div>
    </div>
  );
}

export default App;
