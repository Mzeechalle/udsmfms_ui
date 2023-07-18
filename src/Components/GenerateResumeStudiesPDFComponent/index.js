import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Tooltip } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';

//import StaffLeaveToPrint from './StaffLeaveToPrint';
const StudentResumeStudiesToPrint = React.lazy(() => import("./StudentResumeStudiesToPrint"));

const GenerateResumeStudiesPDF = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div style={{display:"none"}}>
        <StudentResumeStudiesToPrint ref={componentRef} resumeStudiesId = {props.resumeStudiesId} />
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

export default GenerateResumeStudiesPDF;