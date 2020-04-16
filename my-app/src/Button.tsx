import React from 'react'
import {ThemeContext} from './App'

interface ButtonProps {

}

const Button:React.FC<ButtonProps> = ()  => {
    const theme = React.useContext(ThemeContext)
    console.log(theme)
    return (
        <div>
            
        </div>
    )
}

export default Button
