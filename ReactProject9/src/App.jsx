import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildA from "./Components/ChildA";

const UserContext = createContext();
const themeContext = createContext();


function App() {
  // const [user, setUser] = useState({name:"Natesh"});
  const [theme,setTheme] = useState('light');


  return (
    <>
    <themeContext.Provider value = {{theme,setTheme}} >
      <div id="container" style = {{backgroundColor:theme =='light'?'beige':'black'}} >
      <ChildA/>

      </div>

    </themeContext.Provider >
      {/* use context is used when, we do not need to send data unnecsarily to corresponing childs */}
      {/* <UserContext.Provider value = {user} />
      <ChildA />
      <UserContext.Provider /> */}
    </>
  );
}

export default App;
// export {UserContext}
export {themeContext}