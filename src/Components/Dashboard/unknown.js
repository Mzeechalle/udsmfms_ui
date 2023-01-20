import React from 'react';
import { Button, Result } from 'antd';

const UnknownDashboard = () => (
  <Result
    status="warning"
    title="You do not have any dashboard, your position is unathorized!"
    extra={
      <Button type="primary" key="console">
        Go to Login
      </Button>
    }
  />
);

export default UnknownDashboard;