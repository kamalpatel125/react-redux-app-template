import React from 'react';
import logo from './logo.svg';
import { Shell } from './layouts'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
       <Shell  isAppLoading={false} showHeader={true} showFooter={true} />
   
    </div>
  );
}

export default App;
