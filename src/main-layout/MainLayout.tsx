import React from 'react';
import { Layout } from 'antd';
import { Link } from "react-router";
import { useStore } from '../context/useStore';

import logoPicture from '/logo-side-menu-diamond@2x.png';
import logoName from '/logo-side-menu-sparta@2x.png';


import './MainLayout.css';
import { SideMenu } from './SideMenu';
import { Login } from '../screens/login/Login';


const { Footer, Header, Content } = Layout;

export const App: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const { user } = useStore();
  
  return (
    user === null ? 
      <Layout id='login-layout'>
        <Header id='login-header'>
          <Link to={'/'}>
            <img src={logoPicture} id='logoPicture' alt="logoPicture" />  
            <img src={logoName} id='logoName' alt="logoName" />
          </Link>
        </Header>
          <Content id='login-content'>
            <div className="site-layout-content">
              <Login />
            </div>
          </Content>
      </Layout> 
    :
      <Layout id='main-layout'>
        <SideMenu/>
        <Layout>
              {children}
          <Footer style={{ textAlign: 'center' }}>
            Engineering Operations ©{new Date().getFullYear()} Created by Sparta Commodities
          </Footer>
        </Layout>
      </Layout>
  );
};

export default App;