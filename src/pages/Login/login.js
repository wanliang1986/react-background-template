import React, { Component } from 'react';
import styles from '../../css/login.module.css'
import { Form, Input, Button, Checkbox } from 'antd';

import ImageCode from '../../components/ImageCode/ImageCode'

import img1 from '../../image/img1.jpeg'
import img2 from '../../image/img2.jpeg'

import * as ActionTypes from '../../store/constant/actionTypes';
import { connect } from 'react-redux';

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 5,
        span: 19,
    },
};
const buttonLayout = {
    wrapperCol: {
        span: 24,
    },
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:"",
            img:0
        }
    }

    componentDidMount(){
        this.setState({
            url:img1,
            img:0
        })
    }
    onFinish = (values) => {
        console.log(this.props)
        console.log('Success:', values);
        this.props.dispatch({
            type:ActionTypes.ROUTER_SELECT,
            selectedKey:["0-1"]
        })
        this.props.dispatch({
            type:ActionTypes.USER_AUTHORITY,
            authority:["add","table_list"]
        })
        this.props.dispatch({
            type:ActionTypes.ROUTER_AUTHORITY,
            routerAuthority:[
                {
                    menuId:'0',
                    url:'/home/page1',
                    title:'subNav 1',
                    icon:'icon-nickname',
                    children:[
                        {
                            menuId:'0-1',
                            url:'home/page1',
                            title:'option1',
                        },
                        {
                            menuId:'0-2',
                            url:'home/page2',
                            title:'option2',
                        },
                        {
                            menuId:'0-3',
                            url:'home/page3',
                            title:'option3',
                        }
                    ]
                },
                {
                    menuId:'1',
                    url:'/home/table',
                    title:'table',
                    icon:"icon-nickname"
                },
                {
                    menuId:'2',
                    url:'/home/page4',
                    title:'page4',
                    icon:"icon-nickname"
                }
            ]
        })
        this.props.history.push('/home/page1')
    }

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    onReload = ()=>{
        if(this.state.img===0){
            this.setState({
                url:img2,
                img:1
            })
        }else{
            this.setState({
                url:img1,
                img:0
            })
        }
        
    }

    render() {
        const {ImageCodeShow} = this.state
        return (
            <div className={styles.loginPage}>
                <div className={styles.loginBox}>
                    <div className={styles.loginTitle}>
                        <h3>admin</h3>
                    </div>
                    <div className={styles.loginForm}>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            {ImageCodeShow===true?
                            <Form.Item>
                                <ImageCode
                                    imageUrl={this.state.url}
                                    onReload={this.onReload}
                                    onMatch={() => {
                                        console.log("code is match")
                                    }}
                                />
                            </Form.Item>
                            :
                            <Form.Item {...buttonLayout}>
                               <Button type="link" block onClick={()=>{this.setState({ImageCodeShow:true})}}>点击完成校验</Button>
                            </Form.Item>
                            }
                                
                            

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...buttonLayout}>
                                <Button type="primary" htmlType="submit" block>
                                    Login In
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Login);