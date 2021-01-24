import React from 'react'
import "./SidebarOption.css"

function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active && ""}`}>
            <Icon/>
            <h2>This is an option</h2>
        </div>
    )
}

export default SidebarOption
