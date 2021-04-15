import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd';

import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';



const { SubMenu } = Menu

class SiderBarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="1">
                            <Link to="/home/page1">option1</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/home/page2">option2</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/home/page3">option3</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/home/page4">option4</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                        <Link to="/home/page5">option5</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<VideoCameraOutlined />}>
                        <Link to="/home/page6">option6</Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<UploadOutlined />}>
                        <Link to="/home/page7">option7</Link>
                    </Menu.Item>
                </Menu>
            </>
        );
    }
}

export default SiderBarMenu;