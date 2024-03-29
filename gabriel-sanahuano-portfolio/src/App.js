import './App.css';
import { cloneElement } from 'react';
import {useLocation, useRoutes} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from './components/webpages/HomePage';

function App() {
  const webPages = useRoutes([
      {
        path: "/",
        element: <HomePage />
      }
  ]);

  const location = useLocation();
  if (!webPages) return null;

  return (
      <AnimatePresence mode = 'wait'>
          {cloneElement(webPages, {key: location.pathname})} 
      </AnimatePresence> 
  );
}

export default App;
