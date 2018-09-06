import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import { List , Card, Icon } from 'antd';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title: 'login', to: '/login', icon: 'safety'},
                {title: 'home', to: '/home', icon: 'home'},
                {title: '营业收入', to: '/income'},
                {title: '字典管理', to: '/dict'},
                {title: '用户管理', to: '/user', icon: 'user'},
                {title: '授权管理', to: '/about'},
                {title: '角色管理', to: '/role'},
                {title: '设置', to: '/setting', icon: 'setting'},
                {title: 'about', to: '/about', icon: 'about'},
                {title: 'more', to: '/more'},
                {title: 'help', to: '/more'},
                {title: 'help', to: '/more', icon: 'question-circle'},
            ]
        }
    }

    render() {
        return <div>
            <Card>
                {this.state.data.map((item, index) =>
                    <Link key={index} to={item.to}>
                        <Card.Grid><Icon type={item.icon} /> {item.title}</Card.Grid>
                    </Link>
                )}
            </Card>
        </div>
    }
};

export default App;