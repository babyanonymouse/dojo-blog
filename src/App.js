import Navbar from "./Navbar";
import Home from "./Home";
// importing BrowserRouter, Route, and Switch from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    //using BrowserRouter, Route, and Switch
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
