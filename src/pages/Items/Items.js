import React from 'react';
import ItemsRouter from './routes/ItemsRouter';

const Items = ({history}) => <ItemsRouter parentHistory={history}/>
export default Items;