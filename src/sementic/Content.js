import React,{useEffect,useState,Component} from "react";
import { Layout, Breadcrumb } from 'antd';
import { GridView, LocalDataProvider } from 'realgrid';
import Route from '../route/Route'

const Content = () =>{

  const { Content } = Layout;
  return (<Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Route/>
            </div>
          </Content>)
}

export default Content;


