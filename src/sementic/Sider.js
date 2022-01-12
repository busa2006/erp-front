import React,{useState} from "react";
import { Layout, Menu } from 'antd';
import Icon from '@ant-design/icons';
import { Routes,Route,Link } from "react-router-dom";
const Sider = () => {

  const { Header, Content, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="App-logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {/* <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item> */}
          <SubMenu
            key="sub1"
            title={<span><Icon type="production" /><span>생산</span></span>}
          >
            <Menu.Item key="1"><Link to="/item">품목등록</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/process">공정등록</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/itemProcess">품목공정등록</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/processItem">공정품목등록</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/warehouse">창고등록</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/warehouseItem">창고물품등록</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/productionOrder">생산지시등록</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/productionResult">생산실적등록</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/productionReceive">생산입고등록</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="21">Team 1</Menu.Item>
            <Menu.Item key="22">Team 2</Menu.Item>
          </SubMenu>
          {/* <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item> */}
        </Menu>
      </Sider>
      )
}

export default Sider;