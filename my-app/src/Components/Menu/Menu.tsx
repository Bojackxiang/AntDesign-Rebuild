import React from 'react'
import classNames from 'classnames';

interface MenuProps {
    defaultIndex: number; 
    className?: string;
    mode?: "horizontal" | 'vertical'
    style?: React.CSSProperties;
    onSelect? : (selectedIndex: number) => void;
}

const Menu:React.FC<MenuProps> = (props) => {
    const {defaultIndex, className, mode, style, onSelect, children} = props;
    const classes = classNames('alex-menu', className, {
        'menu-vertical' : mode === 'vertical',
        'menu-horizontal' : mode === 'horizontal', 
    })

    return (
        <div>
            {children}
        </div>
    )
}

Menu.defaultProps = {
    defaultIndex: 0, 
    mode: 'horizontal',

}

export default Menu


/************************************************************************************************
 * 自定义的style 
 * style: React.CSSProperties;
 */