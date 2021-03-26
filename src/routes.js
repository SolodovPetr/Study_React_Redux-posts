import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/home';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    </BrowserRouter>
);

export default Routes;