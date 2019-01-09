import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Layout
} from 'antd';
const {
    Header, Footer, Sider, Content,
} = Layout;
import 'antd/dist/antd.css'
import './App.css';

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log('Received values of form: ', values);
      }else {
          let res = fetch('/api/login',
              {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({name: '11111'})
              }
              ).then(res => console.log(res));
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div style={{top: '50%', left: '50%'}}>
            <Layout>
                <Header>
                     <div >学生管理系统</div>
                </Header>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Item>
                          {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                         })(
                             <Input style={{width: '20%'}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" />
                         )}
                      </Form.Item>
                       <Form.Item>
                         {getFieldDecorator('password', {
                           rules: [{ required: true, message: 'Please input your Password!' }],
                         })(
                                <Input style={{width: '20%'}} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                         )}
                      </Form.Item>

                     <Button type="primary" htmlType="submit" className="login-form-button">
                       Log in
                      </Button>
                     </Form>
                </Content>
             </Layout>
        </div>
        )
  }
}
const WrappedNormalLoginForm = Form.create()(App);
export  default WrappedNormalLoginForm;
