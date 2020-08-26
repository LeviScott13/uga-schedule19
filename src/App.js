import React from 'react';
import './App.css';

const imgStyle = {
  width: '8%',
  display: 'flex',
  padding: '5px'
};
const aligntRight = {
  textAlign: 'right',
  padding: '2px',
  paddingRight: '5px'
};

function App() {
  return (
    <div>
      <div style={aligntRight}>
        <a href="./schedule20.html" target="_blank">2020 UGA Schedule</a>
      </div>
      <h1>
        <img src={require('./Images/uga.png')} alt="" style={imgStyle}/>
        2019 UGA Football Schedule
      </h1>
    </div>
  );
}

export default App;
