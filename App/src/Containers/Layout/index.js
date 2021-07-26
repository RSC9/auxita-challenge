import React from 'react';
import './styles.css';
import { Layout, Menu, Row, Col } from 'antd';
import { CalculatorOutlined } from '@ant-design/icons';
import HypertensionCalculator from '../HypertensionCalculator';
import KidenyDiseaseCalculator from '../KidneyDiseaseCalculator';

const { Header, Content, Footer, Sider } = Layout;

const SiderLayout = (props) => {

    const [collapsedSider, setCollapsedSider] = React.useState(false);

    const onCollapse = collapsed => {
        setCollapsedSider(collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsedSider} onCollapse={onCollapse}>
                <div className="logo"><h1>Auxita</h1></div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<CalculatorOutlined />}>
                        Disease Classifier
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>    
                        <Row gutter={16}>
                            <Col span={12}>
                                <HypertensionCalculator />
                            </Col>
                            <Col span={12}>
                                <KidenyDiseaseCalculator />
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>A U X I T A</Footer>
            </Layout>
        </Layout>
    );
};

export default SiderLayout;