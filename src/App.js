import React, {Component} from 'react';
import './App.css';
import Routes from './routes';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

// React路由器4包含一个withRouter HOC，可history通过this.props以下方式访问该对象：
// this.props.history.push('/home')
import {withRouter} from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class App extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    onMenuClick = ({ item, key, keyPath }) => {
        this.props.history.push(keyPath.join(''));
    };
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['/pmis']}
                        style={{ lineHeight: '64px' }}
                        onClick={this.onMenuClick}
                    >
                        <Menu.Item key="/home"><Icon type="home" />home</Menu.Item>
                        <Menu.Item key="/pmis"><Icon type="user" />PMIS</Menu.Item>
                        <Menu.Item key="/hiap"><Icon type="setting" />HIAP</Menu.Item>
                        <Menu.Item key="/about"><Icon type="question-circle" theme="outlined" />about</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['2']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.onMenuClick}
                        >
                            <SubMenu key="user" title={<span><Icon type="user" />user</span>}>
                                <Menu.Item key="1">user</Menu.Item>
                                <Menu.Item key="2">role</Menu.Item>
                                <Menu.Item key="3">deportment</Menu.Item>
                                <Menu.Item key="4">org</Menu.Item>
                            </SubMenu>
                            <SubMenu key="setting" title={<span><Icon type="setting" />setting</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="help" title={<span><Icon type="notification" />help</span>}>
                                <Menu.Item key="9">doc1</Menu.Item>
                                <Menu.Item key="10">doc2</Menu.Item>
                                <Menu.Item key="11">doc3</Menu.Item>
                                <Menu.Item key="12">doc4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 380 }}>
                            <Routes/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}


export default withRouter(App);
