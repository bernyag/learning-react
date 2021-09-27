import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from "./Views/Home";
import Results from "./Views/Results";
import Profile from "./Views/Profile";

function App() {
  return (
    <div className="App">
      
      <Router>

        <Header></Header>

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/results">
              <Results></Results>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
