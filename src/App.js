import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Playlist = lazy(() => import('./Playlist/Playlist'));
const Search = lazy(() => import('./Search/Search'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Playlist} />
                    <Route exact path="/search" component={Search} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
