import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import TemplateContent from './content';

const SophicMasterTemplate = props => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/main', { replace: true });
    props.appPubSub?.subscribe('sophicTemplate', params => {
      console.log('params', params);
    });
    console.log('appPubSub', props.appPubSub);
  }, []);
  return (
    <TemplateContent>
      <Outlet />
    </TemplateContent>
  );
};

export default SophicMasterTemplate;
