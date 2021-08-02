import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../src/components/Home";
import View from "../src/components/View";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/View">
          <View/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
