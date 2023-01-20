import React from 'react';
import { Layout } from 'antd';

function HeaderComponent(){
    return(
        <Layout.Header className="site-layout-background" style={{ position: 'fixed', zIndex: 1, width: "100%" }}>
            <h3 style={{color: "#FFFFFF"}}>UDSM - FMS</h3>
            <div className="user_logged-in-name">
                <h3 style={{color: "#E3E3E3", marginRight: 180}}>
                    {localStorage.getItem("user_fullname")}
                </h3>
            </div>
        </Layout.Header>
    );
}

export default HeaderComponent;

/*
@todo
to put a username to display on the header, a user who has logged in
- to style the header name on small devices, making it responsive
*/