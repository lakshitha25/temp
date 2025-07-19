import React, { useState } from 'react';

function ColorChanger() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = () => {
    const colors = ['lightblue', 'lightgreen', 'lavender', 'peachpuff', 'lightyellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ height: '100vh', backgroundColor: bgColor, textAlign: 'center', paddingTop: '50px' }}>
      <h1>Hello! Click the button to change background color</h1>
      <button onClick={changeColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Color
      </button>
    </div>
  );
}

export default ColorChanger;
