import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Logoutbtn from "./components/Logoutbtn";
import Loginbtn from "./components/Loginbtn";
import "./App.css";

function App() {
  const [login, setLogin] = useState(true);

  
  return (
    <>
    <div>
      <h1>Hello</h1>
      {login && <Logoutbtn />}
    </div>
      {/* <div>Hello World</div> */}
    </>
  );
}

export default App;
