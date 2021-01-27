import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';

const Main = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                 {mainRoutes.map(({ path, exact, component: MyComponent }) => (  
                <Route path={path} exact={exact} key={path} render={()=><MyComponent/>} />
                ))} 
            </Switch>
        </Suspense>     
    );
}

export default Main;