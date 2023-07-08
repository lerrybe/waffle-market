import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import EntryRoute from './routes';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {saveItem} from './utils/storage';

const App = () => {
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const accessToken = '#########';
    const refreshToken = '#########';
    saveItem('accessToken', accessToken);
    saveItem('refreshToken', refreshToken);
  });

  return (
    <>
      <EntryRoute />
      <ToastContainer hideProgressBar position="top-center" />
    </>
  );
};

export default App;
