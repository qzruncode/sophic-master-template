import React from 'react';
import { Spin } from 'antd';

const App: React.FC = () => (
  <div
    id="loading"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.05)',
      borderRadius: '4px',
    }}>
    <Spin />
  </div>
);

export default App;
