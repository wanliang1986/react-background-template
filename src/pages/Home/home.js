import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Menu, Layout, Row, Col, Popover, Button } from 'antd';

import SiderBarMenu from '../../components/SiderBar'
import PageLoading from '../../components/PageLoading'

import styles from '../../css/home.module.css'


import { ConfigProvider } from 'antd';
// import enUS from 'antd/lib/locale/en_US';
// import zhCN from 'antd/lib/locale/zh_CN';

import i18n from '../../i18n'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined
} from '@ant-design/icons';

const AsyncPage1 = lazy(() =>
    import('../Page1/index')
);

const AsyncPage2 = lazy(() =>
    import('../Page2/index')
);

const AsyncTable = lazy(()=>
    import('../Table/table')
)
const {SubMenu}  = Menu
const { Header, Sider, Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            visible: false,
            locale: ""
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    handleVisibleChange = visible => {
        this.setState({ visible });
    };
    logoOut = () => {
        this.props.history.push('/')
    }
    changeLocal=(locale)=>{
        i18n.changeLanguage(locale)
    }
    render() {
        const {locale} = this.state
        return (
            <div>
                {/* <ConfigProvider locale={locale}> */}
                    <Layout className={styles.layoutHeight}  key={locale ? locale.locale : 'en'}>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className={styles.logo} />
                            <SiderBarMenu />
                        </Sider>
                        <Layout className="site-layout">
                            <Header style={{ padding: 0, backgroundColor: 'white' }}>
                                <Row>
                                    <Col span={2}>
                                        <div onClick={this.toggle}>
                                            {this.state.collapsed ? <MenuUnfoldOutlined className={styles.trigger} /> : <MenuFoldOutlined className={styles.trigger} />}
                                        </div>
                                    </Col>
                                    <Col span={20}></Col>
                                    <Col span={2}>
                                        <Popover
                                            content={
                                                <>
                                                    <Menu>
                                                        <SubMenu key="sub1"  title="Language">
                                                            <Menu.Item key="zhCN" onClick={()=>{this.changeLocal('zh-cn')}}>中文</Menu.Item>
                                                            <Menu.Item key="enUS" onClick={()=>{this.changeLocal('en')}}>English</Menu.Item>
                                                        </SubMenu>
                                                    </Menu>
                                                    <Button type="link" onClick={this.logoOut}>Login out</Button>
                                                </>
                                            }
                                            trigger="click"
                                            visible={this.state.visible}
                                            onVisibleChange={this.handleVisibleChange}
                                        >
                                            <SettingOutlined className={styles.trigger} />
                                        </Popover>
                                    </Col>
                                </Row>
                            </Header>
                            <Content
                                className="site-layout-background"
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    minHeight: 280,
                                }}
                            >
                                <Suspense fallback={<PageLoading />}>
                                    <Switch>
                                        <Route
                                            exact
                                            path="/home/page1"
                                            component={AsyncPage1}
                                        />
                                        <Route
                                            exact
                                            path="/home/page2"
                                            component={AsyncPage2}
                                        />
                                        <Route
                                            exact
                                            path="/home/table"
                                            component={AsyncTable}
                                        />
                                    </Switch>
                                </Suspense>
                            </Content>
                        </Layout>
                    </Layout>
                {/* </ConfigProvider> */}
            </div>
        );
    }
}

export default Home