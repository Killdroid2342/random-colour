import React from 'react';

const Main = ({ color, Gen }) => {
  return (
    <div
      className='border-2 border-zinc-500 flex flex-col h-52 w-80 text-zinc-500 font-bold font-Verdana rounded-md mt-20'
      style={{
        backgroundColor: color,
      }}
    >
      <div className='text-2xl text-center mt-10'>{color}</div>
      <div className='flex flex-col items-center'>
        <button
          onClick={Gen}
          className='items-center font-Verdana p-2 mt-5 justify-center bg-transparent rounded-3xl text-zinc-500 border-2 border-zinc-600 font-bold cursor-pointer text-base'
        >
          Click For New Color
        </button>
        <button
          className='border-2 border-zinc-600 rounded-md mt-4 p-2 w-40'
          onClick={() => navigator.clipboard.writeText(color)}
        >
          Copy Color
        </button>
      </div>
    </div>
  );
};

export default Main;
