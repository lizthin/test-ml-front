import React from 'react';
import ItemsRouter from './routes/ItemsRouter';

/**
 * funtion component Items, container route items
 * @param {props object} props history props route  
 * @returns 
 */
const Items = ({history}) => <ItemsRouter parentHistory={history}/>
export default Items;