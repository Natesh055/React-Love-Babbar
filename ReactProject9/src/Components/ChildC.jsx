import React,{useContext} from 'react'
import { themeContext } from '../App'
const ChildC = () => {
    // const user = useContext(UserContext);
    const {theme,setTheme} = useContext(themeContext);

    function handleclick(){
        if(theme=='light')
            setTheme('dark')
        else
        setTheme('light')

    }
  return (
    <div>
        <button onClick={handleclick}>Change Theme</button>
    </div>
  )
}

export default ChildC
