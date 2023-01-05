import { useLocation, useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const menus = [
  {
    key: 'main',
    label: 'main',
  },
  {
    key: 'sub/test1',
    label: 'sub',
  },
];

const TemplateContent = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(['main']);

  useEffect(() => {
    if (location.pathname.startsWith('/sub')) {
      setSelectedKeys(['sub/test1']);
    }
  }, [location]);
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
          selectedKeys={selectedKeys}
          onSelect={({ key, keyPath, selectedKeys, domEvent }) => {
            navigate(`${selectedKeys[0]}`);
            setSelectedKeys(selectedKeys);
          }}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '0 10px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>main</Breadcrumb.Item>
          <Breadcrumb.Item>test1</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ minHeight: 380 }}>{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>sophic-master-template ©2023 Created by Ye Jia Wei</Footer>
    </Layout>
  );
};

export default TemplateContent;
