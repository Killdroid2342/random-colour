import React from 'react';

const Main = ({ color, Gen }) => {
  return (
    <div
      className='border-2 border-zinc-500 flex flex-col h-52 w-80 text-zinc-500 font-bold font-Verdana rounded-md mt-20'
      style={{
        backgroundColor: color,
      }}
    >
      <div className='text-2xl ml-28 mt-10'>{color}</div>
      <button
        onClick={Gen}
        className='font-Verdana w-44 mt-5 ml-20 bg-transparent rounded-3xl text-zinc-500 border-2 border-zinc-600 font-bold cursor-pointer text-base'
      >
        Click For New Color
      </button>
      <button
        className='border-2 border-zinc-600 rounded-md mt-4 w-52 ml-16 pb-1 pt-1'
        onClick={() => navigator.clipboard.writeText(color)}
      >
        Copy Color
      </button>
    </div>
  );
};

export default Main;
