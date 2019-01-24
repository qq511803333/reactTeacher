import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import jquery from 'jquery';
import { Link } from 'react-router-dom';
import '../css/nightStudy.css';
const SubMenu = Menu.SubMenu;

const { Sider } = Layout;



class Student extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.params)
    }

    render() {

        let windowHeight = jquery(window).height();
        let windowWidth =   jquery(window).width() - jquery('#studentSider').width();
        return (
            <Layout style={{height: windowHeight+'px',width: windowWidth+'px'}}>
                <Sider
                    id="studentSider"
                    trigger={null}
                    collapsible
                >
                    <div className="logo" />LOG
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="1">
                                <Link to="/student/studentManagerList">
                                    <Icon type="user" />
                                    <span>Student Manage</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/student/night">
                                    <Icon type="video-camera" />
                                    <span>night Study</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <div >
                    {this.props.children }
                </div>
            </Layout>
        );
    }
}

export  default Student;