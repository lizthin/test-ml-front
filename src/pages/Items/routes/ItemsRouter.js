import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from '../../../components/Header/Header';
import ShowDetail from '../components/ShowDetail/ShowDetail';
import ShowItems from '../components/ShowItems/ShowItems';

import PropTypes from 'prop-types'

/**
 * funtion component ItemsRouter, call component with change path 
 * @param {props object} porps parentHistory, route props 
 * @returns component route 
 */
const  ItemsRouter = ({parentHistory}) => {
        return (
            <>
                <Header parentHistory={parentHistory}/> 
                <div>
                    <Switch>
                        <Route exact path="/items" component={ShowItems} ></Route>
                        <Route exact path="/items/:id" component={ShowDetail} ></Route>
                    </Switch>

                </div>

            </>
        );
};
ItemsRouter.propTypes = {
    parentHistory: PropTypes.object.isRequired
}
export default ItemsRouter;