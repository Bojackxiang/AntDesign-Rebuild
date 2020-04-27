import React from 'react'
import classNames from 'classnames'

import {MenuContext} from './Menu'

export interface MenuItemProps {
    index?: string;  // * 如果加了问好，类型就会是 number | undefined
    disabled?: boolean; 
    classes?: string;
    style?: React.CSSProperties;
}


const MenuItem:React.FC<MenuItemProps> = (props) => {
    const { index, disabled, classes, style, children } = props;

    const context = React.useContext(MenuContext)

    const classnames = classNames('menu-item', classes, {
        'is-disabled': disabled,
        'is-active': context.index === index,
    })

    const _handleClick = () => {
        if(context.onSelect && !disabled) {
            context.onSelect(props.index as string)
        }
    }

    return (
        <li className={classnames} style={style} onClick={() => {_handleClick()}}>
            {children}
        </li>
    )
}

MenuItem.displayName = 'MenuItem' // -> 
export default MenuItem
