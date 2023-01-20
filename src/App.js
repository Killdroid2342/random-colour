import React, { useState } from 'react';
import ColorButtons from './components/ColorButtons/ColorButtons';

document.title = 'Random Color Generator';

function App() {
  const [color, setColor] = useState('#000000');

  const blackClick = () => {
    setColor('#000000');
  };
  const whiteClick = () => {
    setColor('#ffffff');
  };
  const blueClick = () => {
    setColor('#151A7B');
  };
  const redClick = () => {
    setColor('#720000');
  };
  const greenClick = () => {
    setColor('#169B1E');
  };

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
      <h1 className='text-white font-bold font-Verdana text-center mt-60 text-4xl'>
        Random Color Generator
      </h1>
      <div className=' flex flex-col items-center justify-center'>
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
        <ColorButtons
          blackClick={blackClick}
          whiteClick={whiteClick}
          blueClick={blueClick}
          redClick={redClick}
          greenClick={redClick}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
