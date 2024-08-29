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
import { useState } from 'react';
import userId from './components/userId';
import userPw from './components/userPw';

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

function App() {
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

const [id, setId] = useState("");
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

export default App;