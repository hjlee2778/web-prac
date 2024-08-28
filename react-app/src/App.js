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

function App() {
  return (
    <Wrapper>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </Wrapper>
  );
};

export default App;