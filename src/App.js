import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const Playlist = lazy(() => import('./Playlist/Playlist'));
const Search = lazy(() => import('./Search/Search'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export default function App() {
    return (
        <Router>
            <Suspense fallback={<LinearProgress/>}>
                <Switch>
                    <Route exact path="/" component={Playlist} />
                    <Route exact path="/search" component={Search} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}
