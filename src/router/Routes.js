import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from '../src/App';
import FirstIndex from '../src/FirstIndex'

const Root = () => {
    return ( <div>
        <switch>
            <Route
                path="/"
                render={props => (
                    <App>
                        <Switch>
                            <Route path="/" exact component={App} />
                            {/*路由不正确时，默认跳回home页面*/}
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    </App>
                )}
            />
        </switch>
    </div>)
};

export default  Root;