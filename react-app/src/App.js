import logo from './logo.svg';
import './App.css';
import FirstProps from './components/FirstProps';
import FoodMenu from "./components/FoodMenu";
import FoodProps from './components/FoodProps';
import BooleanComponent from './components/BooleanComponent';
import DefaultProps from './components/DefaultProps';
import Wrapper from './components/Wrapper';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent'
import MovieComponent from './components/MovieComponent';
// import { useState } from 'react';
import userId from './components/userId';
import userPw from './components/userPw';
import UserCard from './components/UserCard';

/* function App() {
  return (
    <div>
       <FirstProps name = "이희주" color="blue"/>
    </div>
  );
}

export default App; */

/* function App() {
  return (
    <>
      <FoodProps img = "https://images.unsplash.com/photo-1627207644206-a2040d60ecad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = "pasta" name = "Carbonara" menu="pasta" price="15,000"/>
      <FoodProps img = "https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = "pizza" name = "Margherita" menu="pizza" price="25,000"/>
      <FoodProps img = "https://plus.unsplash.com/premium_photo-1723874465750-870e02eca9d4?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = "steak" name = "Rib Eye Steak" menu="steak" price="50,000"/>
    </>
  );
}

export default App;
 */



/* function App() {
  return (
    <>
      <BooleanComponent study/>
      <BooleanComponent />
    </>
  );
};

export default App; */

/* function App() {
  return (
    <>
      <DefaultProps name="이희주"/>
      <DefaultProps />
    </>
  );
};

export default App; */

/* function App() {
  return (
    <Wrapper>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </Wrapper>
  );
};

export default App; */

/* function App() {
  return (
    <div>
      <MovieComponent title="행복의나라" open="2024.08.14"/>
      <MovieComponent title="에일리언-로물루스" open="2024.08.14"/>
      <MovieComponent title="트위스터스" open="2024.08.14"/>
    </div>
  );
};

export default App; */

/* function App() {
  const price = [
     {reult: 1000},
     {reult: 2000},
     {reult: 3000},
     {reult: 4000},
  ]
  return (
    <>
      {
        price.map(pri => <div>{price.result}</div>)
      }
    </>
  );
};

export default App; */

//function App() {
  //const [1,2] = useState(초기값)
  // 초기값 : 숫자, 문자열, 객체, 배열, 함수
/*   const [인사, 인사변경] = useState(["안녕하세요", "재미있는", "이벤트"])

  // font, setFont
  // name, setName
  const [font, setFont] = useState('50px');
  const fontStyle = {
    // 키(카멜케이스) : 값
    fontSize : font,
  }; */

/*   const [nums, setNums] = useState(0);
  function setNumbers() {
      setNums(nums + 1);
  }

  function resetCounter() {
    setNums(0);
  }

  return (
    <>
     <h1>{nums}</h1>
     <button onClick={setNumbers} onMouseOut={resetCounter}></button>
    </>
  );
};

export default App;

const [nums, setNums] = useState(0);
function setNumbers() {
    setNums(nums + 1);
} */

/* const [message, setMessage] = useState("안녕하세요");    

function login() {
  setMessage('로그인 되었습니다.')
}

function logout() {
  setMessage('로그아웃 되었습니다.')
}

return (
  <>
   <h1>{message}</h1>
   <button onClick={login}>로그인</button>
   <button onClick={logout}>로그아웃</button>
  </>
);
};

export default App; */

/* const [value, setValue] = useState(['안녕', '하이'])

function changeArr() {
  const newValue = [...value]
  newValue[1] = "Hello"

  ///화면 업데이트
  setValue(newValue)
}

return (
  <>
    <h1>{value[0]}</h1>
    <h1>{value[1]}</h1>
    <button onClick={changeArr}>배열 값 변경</button>
  </>
  );
}

export default App; */

/* const [value, setValue] = useState('');

// data : 자식이 작성한 글자
function addDataHandler(data) {
  // 변수 값을 변경
  setValue(data)
}


return (
  <>
   <h3>자식 컴포넌트로부터 전달 받은 데이터 : {value}</h3>
   <ChildComponent onAddData={addDataHandler}/> 
  </>

)

} */

/* const [id, setId] = useState("");
const [pw, setPw] = useState("");

function addIdHandler(id) {
  // ID 컴포넌트로부터 ID 값을 전달 받아서 처리
  // 기존 id = ""
  // 전달 받은 id = "admin"
  setId(id) // id = "admin"
}

function addPwHandler(pw) {
  // PW 컴포넌트로부터 PW 값을 전달 받아서 처리
  // 기존 pw = ""
  // 전달받은 pw = "1234"
  setPw(pw) // pw = "1234"
}

function loginCheck() {
  //기존에 지정된 id, pw 값을 비교
  if(id === "sooa" && pw === "1234") {
    // 로그인 성공
    alert("로그인 성공");
  } else {
    // 로그인 실패
    alert("로그인 실패");
  }
}

return (
  <>
    <userId onAddId = {addIdHandler}/>
    <userPw onAddPw = {addPwHandler}/>
    <button onClick={loginCheck}/>Login<button/>
  </>
 );

}

export default App; */

/*   const user = {
    name: "Lee Hee Ju",
    age: 25,
    email: "lhj2778@naver.com",
  };

  return (
    <div>
      <UserCard {...user} />
    </div>
  );
 }; */

/*  function App () { 
  const [value, setValue] = useState('안녕하세요');
  const [font, setFont] = useState('50px')

  function changeFont(size) {
    setFont(size)
  }

  const fontStyle = {
    fontSize : font
  }
  return (
    <>
      <div style={fontStyle}>{value}</div>
      <button ocClick={() => {changeFont('100px')}}>글자크기변경</button>
    </>
  ) 
}
export default App; */

/* function App () { 
  const [color, setColor] = useState('black');

  const fontColor = {
    color : color,
  };

  return (
    <>
      <div style={fontColor}>글자색 바꾸기</div>
      <button onClick={() => {setColor('red')}}>빨간색</button>
      <button onClick={() => {setColor('green')}}>초록색</button>
      <button onClick={() => {setColor('blue')}}>파란색</button>
    </>
  ) 
}
export default App; */


/* function App () { 
  // 2. useState() 설계 -> 초기값 : 객체
  const [form, setForm] = useState({ username: "", message: ""});

  function onChangeHandler(e) {
    // 객체나 배열의 값을 변경 => Spread 연산자
    // Spread 연산자로 값 복사한 경우 -> 뒤에 나오는 값이 최신 값
    // Key를 만들 때는 'e.target.name'으로 만들면 새로운 Key를 생성함
    // Key를 만들 때는 반드시 []를 이용해서 만들어야 함.
    const newForm = { ...form, [e.target.name]: e.target.value};

    // 원본 form 객체를 -> newForm의 값으로 변경
    setForm(newForm);
  }

  return (
    <>
      <h1>사용자 이름 : {form.username} </h1>
      <h1>내용 : {form.message} </h1>
      <input type="text" name="username" onChange={onChangeHandler}/>
      <input type="text" name="message" onChange={onChangeHandler}/>
    </>
  ) 
}
export default App; */

/* function App () { 
  const [message, setMessage] = useState({ title: "제목", color: "black" });

  function changeMessage(msg) {
    // msg = e.target.value = title
    // console.log(msg)
    // 객체 값 변경 -> Spread 연산자
    const newMessage = { ...message};
    newMessage.title = msg
    newMessage.color = "red"

    // 원본 객체를 새로운 객체 변경
    setMessage(newMessage);
  }

  function showMessage() {
    alert(message.title);
  }


  return (
    <>
      <h1 style={{color: message.color}}>{message.title} </h1>
      <hr/>
      <input type="text" onChange={(e) => {changeMessage(e.target.value)}}/>
    </>
  ) 
}
export default App; */


/* function App () { 


  return (
    <>

    </>
  ) 
}
export default App;
 */

/* import React from 'react';
import IntroductionProps from './components/IntroductionProps';
// App 컴포넌트를 정의합니다. 이는 애플리케이션의 최상위 컴포넌트
function App() {
  // JSX를 사용하여 컴포넌트의 구조를 정의
  return (
    // className="App"을 가진 div로 전체 앱을 감쌉니다.
    // 이는 CSS 스타일링을 위해 사용될 수 있습니다.
    <div className="App">
      <IntroductionProps />
    </div>
  );
}
export default App; */

/* import Button1 from "./components/Button1";
 import Button2 from "./components/Button2";
 function App() {
  return (
    <div>
      <Button1 />
      <Button2 />
    </div>
  );
 }
 export default App; */

 /* import styled from "styled-components";

 const StyledComponent = () => {
  const Button = styled.button `
    background: ${(props) => (props.promary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
 };

 export default StyledComponent; */

 /* import styled from "styled-components";

 const StyledComponent = () => {
  const Container = styled.div`
  background: black;
  padding: 1rem;
  margin: 0 auto;

  width: 1024px;

  @media (max-width: 768px) {
    width: 100%;
  }
  `

  const Button = styled.button `
    background: ${(props) => (props.main ? "blue" : "")};
    color: ${(props) => (props.main ? "white" : "black")};
    border: ${(props) => (props.main ? "3px solid yellow" : "")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `;

  return (
    <Container>
      <Button>버튼 1</Button>
      <Button main>버튼 2</Button>
    </Container>
  );
 };

 export default StyledComponent; */
/* 
 import {useEffect, useState} from "react";

const Prac03 = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
      setRenderCount(renderCount + 1);
      console.log("랜더링 완료");
    });

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );  
};

 export default Prac03; */

/* import {useRef, useState} from "react";

 function App () {
  const style = {
    margin: "30px",
  };

  const [name, setName] = useState('sooa');
  const [age, setAge] = useState(10);

  const nameRef = useRef();
  const ageRef = useRef();

  return (
    <div>
      <div style={style}>
        <h1>input 태그 value 값 지정</h1>
        이름 : <input type="text" ref={nameRef} value={name} onChange={(e)=>setName(nameRef.current.value)} />
        나이 : <input type="number" ref={ageRef} value={age} onChange={(e)=>setAge(ageRef.current.value)}/>
      </div>
    </div>
  );
 }

 export default App; */

import React from 'react';
import ColorProvider from './components/ColorProvider';

const App = () => {
  return (
    <div>
      <ColorProvider />
    </div>
  );
};

export default App;
