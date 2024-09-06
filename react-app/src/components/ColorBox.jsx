import React from 'react';

const ColorBox = ({ color }) => {
  const boxStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: color ? color : 'green', // 삼항 연산자 사용: color가 없으면 기본값으로 green 사용
  };

  return <div style={boxStyle}></div>;
};

export default ColorBox;
