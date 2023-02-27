import React from 'react';

const Main = ({ color, Gen }) => {
  return (
    <div
      className='border-2 border-zinc-500 flex flex-col text-zinc-500 font-bold font-Verdana rounded-md mt-10 p-16'
      style={{
        backgroundColor: color,
      }}
    >
      <div className='text-2xl text-center'>{color}</div>
      <div className='flex flex-col items-center'>
        <button
          onClick={Gen}
          className='items-center font-Verdana justify-center bg-transparent rounded-md text-zinc-500 border-2 border-zinc-600 font-bold cursor-pointer text-base p-2 m-5'
        >
          Click For New Color
        </button>
        <button
          className='border-2 border-zinc-600 rounded-md m-5 p-2'
          onClick={() => navigator.clipboard.writeText(color)}
        >
          Copy Color
        </button>
      </div>
    </div>
  );
};

export default Main;
