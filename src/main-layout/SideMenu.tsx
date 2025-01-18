import { useState } from 'react';
import { Menu, Layout, Button } from 'antd';
import { Link, useLocation } from 'react-router';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'

import logoPicture from '/logo-side-menu-diamond@2x.png';
import logoName from '/logo-side-menu-sparta@2x.png';
import './SideMenu.css';
import { menuItems } from './ItemList';
import { useStore } from '../context/useStore';

const { Sider} = Layout;

export function SideMenu() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const { logout } = useStore();

  return (
    <Sider id='side-layout' trigger={null} collapsible collapsed={collapsed}>
        <div className="expanser-sider">
          <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 24,
                height: 24,
                color: 'white',
              }}
            />
        </div>
        <Link className="demo-logo-vertical" to={'/'}>
          <img src={logoPicture} id='logoPicture'  alt="logoPicture" />
          <img src={logoName} id='logoName' alt="logoName" hidden={collapsed} />
        </Link>
        <Layout id='layout-menu' >
          <div>
            <Menu
            id='side-menu'
              theme="dark"
              defaultOpenKeys={['/enterprise']}
              mode="inline"
              selectedKeys={[location.pathname]}
              items={menuItems.map((item) => ({
                key: item.link,
                label: <Link to={item.link}>{item.name}</Link>,
                icon: item.icon,
                children: item.children && item.children.map((child) => ({ 
                  key: child.link,
                  label: <Link to={child.link}>{child.name}</Link>,
                })),  
              }))}
            />
          </div>
          <div
            id='wrapper-logout'
          >
              <Button
                id='logout-button'
                type="text"
                icon={<LogoutOutlined />} 
                iconPosition='start'
                onClick={() => logout()}                  
              >
                  {collapsed ? '' : 'Logout'}
              </Button>
          </div>
        </Layout>
    </Sider>
  );
}