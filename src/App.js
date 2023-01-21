import React, { useState } from 'react';
import ColorButtons from './components/ColorButtons/ColorButtons';
import Main from './components/Main/Main';

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
        <Main color={color} Gen={Gen} />
        <ColorButtons
          blackClick={blackClick}
          whiteClick={whiteClick}
          blueClick={blueClick}
          redClick={redClick}
          greenClick={greenClick}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
