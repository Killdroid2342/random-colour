import React from 'react';

const ColorButtons = ({
  blackClick,
  whiteClick,
  blueClick,
  redClick,
  greenClick,
}) => {
  return (
    <div className='border-2 border-zinc-500 mt-4 rounded-md text-zinc-500 p-3'>
      <button className='btn-color p-1' onClick={blackClick}>
        Black
      </button>
      <button className='btn-color p-1' onClick={whiteClick}>
        White
      </button>
      <button className='btn-color p-1' onClick={blueClick}>
        Blue
      </button>
      <button className='btn-color p-1' onClick={redClick}>
        Red
      </button>
      <button className='btn-color p-1 mr-4' onClick={greenClick}>
        Green
      </button>
    </div>
  );
};

export default ColorButtons;
