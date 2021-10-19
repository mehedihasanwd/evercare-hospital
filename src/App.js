import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import Services from "./Components/Home/Services/Services";
import SingleService from "./Components/Home/SingleService/SingleService";
import Header from "./Shared/Header/Header";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/service/:serviceId">
              <SingleService />
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
