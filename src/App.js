import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import {Footer,Sider,Header,Content} from './sementic';
import 'antd/dist/antd.css';
class App extends Component {
  

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider/>        
        <Layout>
          <Header/>
          <Content/>
          <Footer/>
        </Layout>
      </Layout>
    );
  }
}

export default App;
