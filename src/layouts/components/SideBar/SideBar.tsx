import React from 'react'

import './sidebar.scss'

export interface ISideBarProps {
  close: boolean
}

export interface ISideBarAction {
  toggleSideBar: () => void
}

const SideBar = (props: ISideBarProps & ISideBarAction) => {
  const className = props.close ? 'sidebar close' : 'sidebar'
  const title = props.close ? 'Open' : 'Close'
  return(
    <div className={className}>
      <div className='sidebar__toggle'>
        <div 
          className='sidebar__toggle-button-icon'
          onClick={props.toggleSideBar}
        >ICON</div>
      </div>
      <nav className='sidebar__links'>
         Links 
      </nav >
    </div >
  )
}

export default SideBar
