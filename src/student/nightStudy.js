import React from 'react';
import { Layout, Menu, Icon, Avatar,Dropdown, Button } from 'antd';
import jquery from 'jquery';
import '../css/nightStudy.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header, Sider, Content } = Layout;



class nightStudy extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        let windowHeight = jquery(window).height();
        console.log(windowHeight);
        return (
            <Layout style={{height: windowHeight+'px'}}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />LOG
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                id="HeaderIcon"
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        <Menu id="HeaderMenu"
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <SubMenu title={<span className="submenu-title-wrapper"><Avatar id="HeaderAva" size={30}
                                                                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" icon="user" /></span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">个人设置</Menu.Item>
                                    <Menu.Item key="setting:2">退出</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>

                        </Menu>


                    </Header>
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                    }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export  default nightStudy;