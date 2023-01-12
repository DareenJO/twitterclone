import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Sidebaroption from './Sidebaroption';

function App() {
  return (
    <div className="app">
     <h1>twitter clone </h1>
    

     {/**sidebar */}
       <Sidebar/>
        {/**options */}
        <Sidebaroption/>
        <Sidebaroption/>
        <Sidebaroption/>
     {/**feed */}

     {/**widget */}

     </div>
  );
}

export default App;
