import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import request from './utils/request';

import {Form, Icon, Input, Button, message} from 'antd';


const FormItem = Form.Item;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            password: '123456',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('form data: ', values);
            if (err) return;
            this.doLogin(values);
        });
    }
    doLogin = (data) => {
        data['password'] = window.OBJ_RSA_ENCRYPT.encrypt(data['password']);
        request.post('/api/login/login', data).then((retData) => {
            this.loadingFlag = false;
            if (retData['code'] !== 0) {
                this.loadingFlag = false;
                this.loginMsg    = retData['msg'];
                console.log('登录失败：' + retData['msg']);
                return;
            }

            console.log('登录成功：' + retData['msg']);
            message.success('登录成功：' + retData['msg']);
        }).catch((error) => {
            this.loadingFlag = false;
            this.loginMsg    = ('登录异常：' + error);
            console.log('登录异常：' + error);
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {span: 7},
            wrapperCol: {span: 12},
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <br/>
                <br/>
                <br/>

                <div className="App" style={{display: "flex", flexAlign: "column", alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '50%'}}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem
                        {...formItemLayout}
                        label="用户名"
                    >
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入用户名'}],
                            initialValue: this.state.userName,
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="用户名"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="密码"

                    >
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码'}],
                            initialValue: this.state.password,

                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="密码"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        wrapperCol={{span: 12, offset: 5}}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </FormItem>
                </Form>
                </div>
                </div>
            </div>
        );
    }
}

export default App;
