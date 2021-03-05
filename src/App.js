import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Items from './pages/Items/Items.js';


const App = (props) => {
        return (
            <Router>
                <div>
                    <Switch>
                      <Route path="/" component={Items} history={props.history}/>
                    </Switch>
                </div>
            </Router>
        );
};
export default App;