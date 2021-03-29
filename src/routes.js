import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';

import Header from './components/Header';
import Home from './components/home';
import SinglePost from './components/posts/SinglePost'

const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/article/:id" component={SinglePost} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);

export default Routes;