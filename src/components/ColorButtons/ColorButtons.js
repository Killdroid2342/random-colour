import React from 'react';

const ColorButtons = ({
  blackClick,
  whiteClick,
  blueClick,
  redClick,
  greenClick,
}) => {
  return (
    <div className='border-2 border-zinc-500 h-14 w-80 mt-4 rounded-md text-zinc-500'>
      <button className='btn-color' onClick={blackClick}>
        Black
      </button>
      <button className='btn-color' onClick={whiteClick}>
        White
      </button>
      <button className='btn-color' onClick={blueClick}>
        Blue
      </button>
      <button className='btn-color' onClick={redClick}>
        Red
      </button>
      <button className='btn-color' onClick={greenClick}>
        Green
      </button>
    </div>
  );
};

export default ColorButtons;
