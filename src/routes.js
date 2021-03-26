import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    </BrowserRouter>
);

export default Routes;