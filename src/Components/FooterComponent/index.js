import React from 'react'
import { Layout } from 'antd';



const FooterComponent = () => {
    return (
        <>
            <Layout.Footer style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,128,.1)', marginTop: '10px', height: "50px"}}>
                <span>
                    &#169; <a href="/">UDSM - FMS</a>, {new Date().getFullYear()}
                </span>
            </Layout.Footer>
        </>
    );
}

export default FooterComponent;