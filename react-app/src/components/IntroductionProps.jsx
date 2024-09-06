import React from "react";
// IntroductionProps 컴포넌트 생성, 함수명 컴포넌트로 작성
const IntroductionProps = () => {
  // 이름을 콘솔에 출력하는 함수
  function showName() {
    console.log("고라파덕");
  }
    // 나이를 콘솔에 출력하는 함수, 매개변수로 age
  function showAge(age) {
    console.log(age);
  }
  // 입력 필드의 값을 콘솔에 출력하는 함수입니다.
  // 이벤트 객체 e를 매개변수로 받아 target.value를 출력
  function showText(e) {
    console.log(e.target.value);
  }
  // JSX를 사용하여 컴포넌트의 UI를 렌더링
  return (
    <>
      <h1>안녕</h1>
      {/* 버튼을 클릭하면 showName 함수가 실행됩니다. */}
      <button onClick={showName}>Show Name</button>
      {/* 버튼을 클릭하면 showAge 함수가 1000을 인자로 실행 */}
      <button onClick={() => showAge(1000)}>Show age</button>
      {/* 텍스트 입력 필드입니다. 값이 변경될 때마다 showText 함수가 실행됩니다. */}
      <input type="text" onChange={(e) => showText(e)} />
    </>
  );
};
export default IntroductionProps;