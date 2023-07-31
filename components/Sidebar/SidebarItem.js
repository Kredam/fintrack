import React from 'react'

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ icon, title }) => {
  return (
    <a className="sidebar-item">
      <div className="mr-6">{icon}</div>
      <div>{title}</div>
    </a>
  )
}

export default SidebarItem
