import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Layout, Menu, Divider, message } from 'antd';
import { showItems } from "../../Helpers/customFunctions";
import { useAuth } from '../../Authentication/auth-context';
import { logout } from '../../Data/Users';
import {
  PushpinOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
  PoweroffOutlined
} from '@ant-design/icons';

const SideNav = () => {

    const { userLogout } = useAuth();

    const history = useHistory();

    const userPosition = localStorage.getItem("user_position");
  
    const [collapsed, setCollapsed] = useState(false);
  
    const onCollapse = (collapsed) => {
      setCollapsed(collapsed)
    };

    const handleUserLogout = async () => {
      try{
        await logout(
          localStorage.getItem("user_email"),
          async (data) => {
            if(data.error){
              message.error("Request failed!");
            }
            await localStorage.clear();
            await userLogout();
            history.push("/");
            message.success("Logout success");
          },
          (error) => {
            console.log(error);
          }
        )

      }catch(error){
        console.log(error);
      }
    };
  
    return (
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{backgroundColor: "#2460CD"}}>
        <center>
            <img 
                src="https://res.cloudinary.com/coictfms/image/upload/v1646580579/udsmlogopngtransparent_tezwmp.png" 
                className="sidenav-image-logo"
                alt='imagelogo'
            />
        </center>
        <Divider style={{color: "gray", fontSize:"14px"}}/>
        <Menu theme="dark" mode="inline" style={{"backgroundColor":"#2460CD", "color":"#ffffff"}}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
          {
            showItems(userPosition).map(item => (
                <Menu.Item key={`${item.key}`} icon={item.icon}>
                  <Link to={`${item.route}`}>{item.item}</Link>
                </Menu.Item>
            ))
          }
          {/* <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<HomeOutlined />}>
            <Link to="/departments">Departments</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<HomeOutlined />}>
            <Link to="/roles">Roles</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<HomeOutlined />}>
            <Link to="/positions">Positions</Link>
          </Menu.Item> */}
          {/* <Menu.SubMenu key="sub1" icon={<AppstoreAddOutlined />} title="Posts">
            <Menu.Item key="2">
                <Link to="/departments" activeClassName="active">Department</Link>
            </Menu.Item>
          </Menu.SubMenu> */}
          <Menu.Item key="10" icon={<PoweroffOutlined />}>
            <Link onClick={handleUserLogout}>
              Logout
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  };
  
  export default SideNav;