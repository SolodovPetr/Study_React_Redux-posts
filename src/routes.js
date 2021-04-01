import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';

import Header from './components/Header';
import Home from './components/home';
import SinglePost from './components/posts/SinglePost';
import Contact from './components/contact';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/article/:id" component={SinglePost} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);

export default Routes;
