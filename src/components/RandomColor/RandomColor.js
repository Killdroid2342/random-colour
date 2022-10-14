import React, { useState } from 'react';
import './RandomColor.css';

const RandomColor = () => {
  const [color, setColor] = useState('#00000');

  const RGB = () => Math.floor(Math.random() * 256);

  const Gen = () => {
    const color = {
      r: RGB(),
      g: RGB(),
      b: RGB(),
    };

    const threeLet = (r, g, b) =>
      '#' +
      [r, g, b]
        .map((x) => {
          const threeLet = x.toString(16);
          return threeLet.length === 1 ? '0' + threeLet : threeLet;
        })
        .join('');

    setColor(threeLet(color.r, color.g, color.b));
  };

  return (
    <div className='outer-div' style={{ backgroundColor: color }}>
      <div className='color-name'>{color}</div>
      <button onClick={Gen} className='btn-gen'>
        Click For New Color
      </button>
    </div>
  );
};

export default RandomColor;
