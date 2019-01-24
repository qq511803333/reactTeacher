import React from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import nightStudy from '../student/nightStudy'
import Student from '../student/Student';
import App from '../App';
import FirstIndex from '../FirstIndex';
import StudentManageList from '../student/studentManageList';

const Root = () => {
    return ( <div>
        <switch>
            <Route
                history={createBrowserHistory()}
                path="/"
                render={props => (
                    <FirstIndex>
                        <Switch>
                            <Route  path="/home" component={App} />
                            <Route path="/student" render={props =>(
                                <Student>
                                    <Route  path="/student" exact component={nightStudy} />
                                    <Route  path="/student/student" exact component={App} />
                                    <Route  path="/student/night" exact component={nightStudy} />
                                    <Route  path="/student/studentManagerList" exact component={StudentManageList}/>
                                </Student>
                              )}>
                            </Route>
                            {/*路由不正确时，默认跳回home页面*/}
                            <Route  path="/" exact component={App} />
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    </FirstIndex>
                )}
            />
        </switch>
    </div>)
};

export default  Root;