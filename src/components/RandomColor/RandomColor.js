import React, { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000');

  const RGB = () => Math.floor(Math.random() * 256);

  const threeLet = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const threeLet = x.toString(16);
        return threeLet.length === 1 ? '0' + threeLet : threeLet;
      })
      .join('');

  const Gen = () => {
    const color = {
      r: RGB(),
      g: RGB(),
      b: RGB(),
    };

    setColor(threeLet(color.r, color.g, color.b));
  };

  return (
    <div style={{ backgroundColor: color }} className='container'>
      <button style={{ color: color }} onClick={Gen}>
        {color}
      </button>
    </div>
  );
};

export default RandomColor;
