import React from 'react'
import '../Styles/SidebarRow.css'
function SidebarRow(props) {
  return (
    <div className='sidebar-row'>
        <props.icon className="sidebar-icon"/>
        <h2 className='sidebar-title'>{props.title}</h2>
    </div>
  )
}

export default SidebarRow