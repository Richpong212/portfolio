import React from 'react'
import './Toggle.css'
import Moon from '../../img/moon.png'
import Sun from '../../img/sun.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'


export const Toggle = () => {
    const theme = useContext(ThemeContext)
    
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }

  return (
    <div className='t' >
       <img src={Moon} className='t-img' />
       <img src={Sun} className='t-img' />
       <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}
