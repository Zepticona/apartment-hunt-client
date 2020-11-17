import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddHouse from "./components/Dashboard/AddHouse/AddHouse";
import MyRent from "./components/Dashboard/MyRent/MyRent";
import Login from "./components/Authentication/Login/Login";
import ApartmentDetails from "./components/ApartmentDetails/ApartmentDetails";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/apartmentDetails">
            <ApartmentDetails></ApartmentDetails>
          </PrivateRoute>
          <Route path="/dashboard/booking">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard/addHouse">
            <AddHouse></AddHouse>
          </Route>
          <Route path="/dashboard/myRent">
            <MyRent></MyRent>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
