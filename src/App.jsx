import styled from "styled-components";
// import './App.css'
import CompUseEffect from "./components/CompUseEffect";
// import CompUseState from "./components/CompUseState";

const Cont = styled.div`
/* display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh; */
`

const App = () => {
  return (
  <Cont>
   <CompUseEffect />
  </Cont>
    );
};

export default App;