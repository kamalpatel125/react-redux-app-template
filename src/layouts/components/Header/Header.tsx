import React from 'react'
import './header.scss'

export interface IHeaderProps {
  showFooter?: boolean
}

export default class Header extends React.Component<IHeaderProps> {
  constructor (props: IHeaderProps) {
    super(props)
  }

  public render () {
    return(
      <div className='header'>
        <div className='header__info'>
          <div className='header__logo'>
             LOGO
          </div>
          <h6 className='header__title'>
              Template Project
          </h6>
        </div>
        <div className='header__notifications'>
           Notification
        </div>
      </div>
    )
  }
}
