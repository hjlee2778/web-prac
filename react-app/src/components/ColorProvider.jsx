import React, { useState } from 'react';
import ColorBox from './ColorBox';

const ColorProvider = () => {
  const [color, setColor] = useState('green'); // 기본 색상은 green

  const handleColorChange = () => {
    const userColor = prompt('원하는 색상을 입력하세요', 'green');
    setColor(userColor ? userColor : 'green'); // 삼항 연산자 사용
  };

  return (
    <div>
      <ColorBox color={color} />
      <button onClick={handleColorChange}>색상 변경</button>
    </div>
  );
};

export default ColorProvider;
