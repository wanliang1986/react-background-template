import React, { Component } from 'react';
import styles from '../../css/login.module.css'
import { Form, Input, Button, Checkbox } from 'antd';

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
        this.state = {}
    }
    
    onFinish = (values) => {
          console.log('Success:', values);
          this.props.history.push('/home/page1')
    }
      
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        
    }
    
    render() {
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

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...buttonLayout}>
                                <Button type="primary" htmlType="submit" block>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;