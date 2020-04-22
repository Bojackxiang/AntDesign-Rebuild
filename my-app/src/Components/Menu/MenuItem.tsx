import React from 'react'
import classNames from 'classnames'

interface MenuItemProps {
    index?: number; 
    disabled?: boolean; 
    classes?: string;
    style?: React.CSSProperties;
}

const MenuItem:React.FC<MenuItemProps> = (props) => {
    const { index, disabled, classes, style, children } = props;;
    const classnames = classNames('menu-item', classes, {
        'is-disabled': disabled,

    })

    return (
        <li className={classes} style={style}>
            {children}
        </li>
    )
}

export default MenuItem
