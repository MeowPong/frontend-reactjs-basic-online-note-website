import React from 'react'
import './Header.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header(props) {
  const { theme, setTheme } = props;

  function ToggleTheme(){
    if(theme === "Light"){
      setTheme("Dark")
    }else{
      setTheme("Light")
    }
  }
  
  return (
    <header className={theme === "Light" ? "LightHeader" : "DarkHeader"}>
        <div className='Logo'>
          <span>OnlineNote</span>
        </div>
        <div className='ThemeContainer' onClick={ToggleTheme}>
          <span>{theme === "Light" ? "Light Mode" : "Dark Mode"}</span>
          <span className='ThemeIcon' >
            {theme==="Light"? <LightModeIcon /> : <DarkModeIcon />}
          </span>
        </div>
    </header>
  )
}

export default Header