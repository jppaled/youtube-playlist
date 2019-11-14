import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const NotFound = lazy(() => import('./components/notFound'));
const Player = lazy(() => import('./components/player'));
const Playlist = lazy(() => import('./components/playlist'));
const Search = lazy(() => import('./components/search'));

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<LinearProgress/>}>
                <Switch>
                    <Route exact path="/" component={Playlist} />
                    <Route path="/player/:id" component={Player} />
                    <Route path="/search" component={Search} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}
