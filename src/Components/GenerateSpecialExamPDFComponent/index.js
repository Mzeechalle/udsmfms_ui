import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Tooltip } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';

//import StaffLeaveToPrint from './StaffLeaveToPrint';
const StudentSpecialExamToPrint = React.lazy(() => import("./StudentSpecialExamToPrint"));

const GenerateSpecialExamPDF = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div style={{display:"none"}}>
        <StudentSpecialExamToPrint ref={componentRef} specialExamId = {props.specialExamId} />
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

export default GenerateSpecialExamPDF;