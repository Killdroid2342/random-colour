import React, { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000');

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
    <div className='border-2 border-black'>
      {color}
      <button onClick={Gen}>Click For New Color</button>
    </div>
  );
};

export default RandomColor;
