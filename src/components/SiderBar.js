import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu} from 'antd';
import Icon from '@ant-design/icons'

// import {
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
// } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as ActionTypes from '../store/constant/actionTypes';

import { createFromIconfontCN } from '@ant-design/icons';


import Authorized from './Authorized/Authorized'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2502576_efkxxhb5wp6.js',
  });

const { SubMenu } = Menu
 
const MenuItem = Menu.Item;

class SiderBarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    selected = (item) => {
        this.props.dispatch({
            type: ActionTypes.ROUTER_SELECT,
            selectedKey: item.selectedKeys
        })
    }

    getSubmenu = () => {
        return this.props.routerAuthority.map(item => {
            if(!item.children || item.children.length === 0){    //如果当前路由没有子路由且该路由的hidden为false或不设置该路由的hidden时则直接显示该路由，若该路由的hidden为true则不显示该路由
                
 
                return (
                    <MenuItem key={item.menuId}>
                        <Link to={item.url} replace> {/*加一个replace是因为当前路由下的 history 不能 push 相同的路径到 stack 里。只有开发环境存在，生产环境不存在，目前还没看到官方有去掉的意思*/}
                            <IconFont type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </MenuItem>
                )               
            }else if(item.children && item.children.length > 1){  //当当前路由有两个及两个以上子路由时，若两个子路由的hidden都为true时则该路由和其子路由全部隐藏
                
 
                let noHiddenRouter = [];
                item.children.map(v => {
                    if(v.hidden){
                        return <MenuItem key={item.menuId}><Link to={item.url} replace><IconFont type={item.icon} /><span>{item.title}</span></Link></MenuItem>
                    }else{                        
                        noHiddenRouter.push(v)
                    }
                })
 
                if(noHiddenRouter.length > 0){
                    return (
                        <SubMenu key={item.menuId} title={<span><IconFont type={item.icon} /><span>{item.title}</span></span>}>
                            {
                                noHiddenRouter.map(v => {                                
                                    return <MenuItem key={v.menuId}><Link to={v.url} replace>{v.title}</Link></MenuItem>                               
                                })
                            }
                        </SubMenu>
                    )
                }
            }
        });
    }


    render() {
        const { selectedKey,routerAuthority } = this.props
        return (
            <>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKey} defaultOpenKeys={['0']} onSelect={this.selected}>
                    {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1" >
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
                        <Link to="/home/table">table</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<VideoCameraOutlined />}>
                        <Link to="/home/page6">option6</Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<UploadOutlined />}>
                        <Link to="/home/page7">option7</Link>
                    </Menu.Item> */}
                  {this.getSubmenu()}
                </Menu>
            </>
        );
    }
}

const mapStoreStateToProps = (state) => {
    const selectedKey = state.router.selectedKey
    const routerAuthority = state.authority.routerAuthority
    return { 
        selectedKey,
        routerAuthority
     }
};


export default connect(mapStoreStateToProps)(SiderBarMenu);