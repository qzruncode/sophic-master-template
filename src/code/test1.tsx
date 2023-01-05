import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <div className="test_box">
      <span>我是主应用中的页面，我想访问子应用的</span>
      <Link to="/sub/test2">test2</Link>
      <span>页面</span>
    </div>
  );
};

export default Test;
