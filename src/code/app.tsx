import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import TemplateContent from './content';

const SophicMasterTemplate = props => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/main', { replace: true });
    }
  }, [location])
  
  return (
    <TemplateContent>
      <Outlet />
    </TemplateContent>
  );
};

export default SophicMasterTemplate;
