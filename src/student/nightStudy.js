import React from 'react';
import { Layout, Menu, Icon, Avatar, Modal,Table, Divider, Tag } from 'antd';
import jquery from 'jquery';
import '../css/nightStudy.css';
const SubMenu = Menu.SubMenu;
const { Column, ColumnGroup } = Table;

const { Header, Sider, Content } = Layout;



class nightStudy extends React.Component {
    state = { visible: false, loading: false  }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        let windowHeight = jquery(window).height();
        let windowWidth =   jquery(window).width() - jquery('#studentSider').width();
        const data = [{
            key: '1',
            firstName: 'John',
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }];
        return (
            <div >
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>xxg</p>
                </Modal>
                <Layout style={{height: windowHeight+'px',width: windowWidth+'px'}}>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                                <Icon
                                    id="HeaderIcon"
                                    className="trigger"
                                />

                            <Menu id="HeaderMenu"
                                mode="horizontal">
                                <SubMenu title={<span className="submenu-title-wrapper"> <Icon id='SubMenuIcon' type="question-circle" /></span>}>
                                    <Menu.Item  key="setting:1" >
                                        <a onClick={this.showModal}>
                                            寻找管理员
                                        </a>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu title={<span className="submenu-title-wrapper"><Avatar id="HeaderAva" size={30}
                                                                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" icon="user" />xxg</span>}>
                                        <Menu.Item key="3">个人设置</Menu.Item>
                                        <Menu.Item key="4">退出</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Header>
                        <Content style={{
                            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                        }}
                        >
                            <Table dataSource={data} >
                                    <Column
                                        title="First Name"
                                        dataIndex="firstName"
                                        key="firstName"
                                    />
                                    <Column
                                        title="Last Name"
                                        dataIndex="lastName"
                                        key="lastName"
                                    />
                                <Column
                                    title="Age"
                                    dataIndex="age"
                                    key="age"
                                />


                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <span>
                                          <a href="javascript:;">Edit {record.lastName}</a>
                                          <Divider type="vertical" />
                                          <a href="javascript:;">Delete</a>
                                        </span>
                                    )}
                                />
                            </Table>
                        </Content>
                    </Layout>
                 </Layout>
            </div>
        );
    }
}

export  default nightStudy;