import React from 'react'

const Header = ({handleDarkMode}) => {

    return (
        <div className="header">
            <h1>Notes App</h1>
            <button type="submit" className="save" onClick={()=>handleDarkMode((previousDarkMode)=> !previousDarkMode)}>Toggle Mode</button>
        </div>
    )
}

export default Header
