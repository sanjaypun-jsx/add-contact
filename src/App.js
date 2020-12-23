import HomeScreen from "./Components/HomeScreen";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./Components/Details";
import FavouriteScreen from "./Components/FavouriteScreen";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/details/:id" component={Details} />
        <Route path="/favourites" component={FavouriteScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Router>
    </div>
  );
};
export default App;
