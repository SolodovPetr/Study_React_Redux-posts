import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';

import Header from './components/Header';
import Home from './components/home';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);

export default Routes;