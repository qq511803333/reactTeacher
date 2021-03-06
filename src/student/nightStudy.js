import React from 'react';
import { Form, Layout, Menu, Icon, Avatar, Modal,Table, Divider, Tag, Input, Button } from 'antd';
import jquery from 'jquery';
import '../css/nightStudy.css';
import Cookies from 'js-cookie'
const SubMenu = Menu.SubMenu;
const { Column, ColumnGroup } = Table;
const { Header, Sider, Content } = Layout;


class nightStudy extends React.Component {
    state = { editVisible: false, loading: false, userSetting: false  }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        this.setState({
            editVisible: false,
        });
    };

    handleCancel = (e) => {
        console.log(1111)
        this.setState({
            editVisible: false,
        });
    };

    showUserSetting = (e) =>{
        this.setState({
            editVisible: true,
        })
    };

    handleUserOk = (e) => {
        this.setState({
            visible: false,
        });
    };

    handleUserCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    render() {

        const { getFieldDecorator } = this.props.form;
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
                <Modal
                    title="Basic Modal1"
                    visible={this.state.editVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item
                            label="Password"
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                }, {
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </Form.Item>
                    </Form>
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
                                                                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" icon="user" />{Cookies.get('userName')}</span>}>
                                        <Menu.Item key="3">
                                            <a onClick={this.showUserSetting}>
                                                个人设置
                                            </a>
                                        </Menu.Item>
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
const nightStudys = Form.create({ name: 'nightStudy' })(nightStudy);
export  default nightStudys;