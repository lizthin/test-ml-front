import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./pages/Items/Items.js";

/**
 * App funtion router call default route, scalable switch router flow
 * @param {object} props routers component
 */
const App = (props) => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Items} history={props.history} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
