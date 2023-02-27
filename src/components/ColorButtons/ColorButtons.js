import React from 'react';

const ColorButtons = ({
  blackClick,
  whiteClick,
  blueClick,
  redClick,
  greenClick,
}) => {
  return (
    <div className='border-2 border-zinc-500 text-zinc-500 p-5 rounded-md mt-5'>
      <button
        className='rounded-md border-2 border-zinc-500 p-2 font-bold m-2'
        onClick={blackClick}
      >
        Black
      </button>
      <button
        className='rounded-md border-2 border-zinc-500 p-2 font-bold m-2'
        onClick={whiteClick}
      >
        White
      </button>
      <button
        className='rounded-md border-2 border-zinc-500 p-2 font-bold m-2'
        onClick={blueClick}
      >
        Blue
      </button>
      <button
        className='rounded-md border-2 border-zinc-500 p-2 font-bold m-2'
        onClick={redClick}
      >
        Red
      </button>
      <button
        className='rounded-md border-2 border-zinc-500 p-2 font-bold m-2'
        onClick={greenClick}
      >
        Green
      </button>
    </div>
  );
};

export default ColorButtons;
