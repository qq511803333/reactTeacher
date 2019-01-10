import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import nightStudy from '../student/nightStudy'
import App from '../App';
import FirstIndex from '../FirstIndex';

const Root = () => {
    return ( <div>
        <switch>
            <Route
                path="/"
                render={props => (
                    <FirstIndex>
                        <Switch>
                            <Route path="/home" component={App} />
                            <Route path="/student" component={nightStudy} />
                            {/*路由不正确时，默认跳回home页面*/}
                            <Route path="/" exact component={App} />
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    </FirstIndex>
                )}
            />
        </switch>
    </div>)
};

export default  Root;