import React, { useState } from 'react';

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
    <React.Fragment>
      <div
        className='border-2 border-white flex flex-col h-52 w-80 text-white m-96 font-bold font-Verdana rounded-md'
        style={{ backgroundColor: color }}
      >
        <div className='text-2xl ml-28 mt-10'>{color}</div>
        <button
          onClick={Gen}
          className='font-Verdana w-44 mt-5 ml-20 bg-transparent rounded-3xl text-white border-2 border-white font-bold cursor-pointer text-base'
        >
          Click For New Color
        </button>
      </div>
      <div className='theme-options'>
        <div className='bg-black' />
      </div>
    </React.Fragment>
  );
};

export default RandomColor;
