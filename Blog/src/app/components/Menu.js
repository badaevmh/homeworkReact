import React from 'react'
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <MenuItem key={index} href={item.href}>
                {item.title}
            </MenuItem>
        })

        return (
            <header>
                <div className="header-top">
                <img className='logo' src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png" alt="" />
                <h1 className='main-title'>React Menu</h1>
                </div>
                <nav className='nav'>
                    <ul>
                        {items}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Menu;