import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {  MenuFoldOutlined, 
          MessageOutlined, 
          UserOutlined, 
          VideoCameraOutlined, 
          PictureOutlined, 
          LayoutOutlined,
          TeamOutlined  } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import Profile from './Profile.js';
import ChatApp from './ChatApp.js';
import Friends from './Friends.js';
import News from './News.js';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
              <Link to="/friends">Friends</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<LayoutOutlined />}>
              <Link to="/news">News</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<MessageOutlined />}>
              <Link to="/messages">Chat</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              <Link to="/video">Video</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<PictureOutlined />}>
              <Link to="/pictures">Pictures</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            ALEX
          </Header>
          <Content
            style={{
              margin: '5px 5px',
              padding: 10,
              height: '80vh',
              background: colorBgContainer,
              overflow: 'auto',
            }}>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<ChatApp />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/news" element={<News />} />
              {/* <Route path="/video" element={<Video />} />
              <Route path="/pictures" element={<Pictures />} /> */}
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>by ALEX ©2023</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;