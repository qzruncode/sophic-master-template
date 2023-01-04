import { Outlet, useNavigate } from 'react-router-dom';

import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const menus = [
  {
    key: 'test1',
    label: 'main',
  },
  {
    key: 'sub',
    label: 'sub',
  },
];

const SophicMasterTemplate = props => {
  const navigate = useNavigate();

  useEffect(() => {
    props.appPubSub?.subscribe('sophicTemplate', params => {
      console.log('params', params);
    });
    console.log('appPubSub', props.appPubSub);
  }, []);
  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div
          style={{
            float: 'left',
            width: 120,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
            lineHeight: '31px',
            color: 'white',
            textAlign: 'center',
          }}>
          主应用
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menus}
          onSelect={({ key, keyPath, selectedKeys, domEvent }) => {
            navigate(`/main/${selectedKeys[0]}`);
          }}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>main</Breadcrumb.Item>
          <Breadcrumb.Item>test1</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 380 }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>sophic-master-template ©2023 Created by Ye Jia Wei</Footer>
    </Layout>
  );
};

export default SophicMasterTemplate;
