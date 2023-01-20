import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Tooltip } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';

//import StaffLeaveToPrint from './StaffLeaveToPrint';
const StaffLeaveToPrint = React.lazy(() => import("./StaffLeaveToPrint"));

const GeneratePDF = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div style={{display:"none"}}>
        <StaffLeaveToPrint ref={componentRef} leaveId = {props.leaveId} />
      </div>
      <Tooltip title="Get PDF document!">
          <PrinterOutlined 
              style={{"color":"#0899E6","fontSize":"16px", marginLeft: 30}}
              onClick={handlePrint}
          />
      </Tooltip>
    </>
  );
};

export default GeneratePDF;