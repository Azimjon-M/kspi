import React from 'react';

import { useRoutes } from 'react-router-dom'; 
import { routes } from '../../routes/index';
import Header from '../Header';


function App() {
    let content = useRoutes(routes);
    return (
        <div >
            <Header />
            {content}
        </div>
    )
}

export default App;