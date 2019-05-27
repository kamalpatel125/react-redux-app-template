import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Content from '../Content'
import Footer from '../Footer'
import Header from '../Header'
import SideBar from '../SideBar'

import './shell.scss'

export interface IShellProps {
  isAppLoading: boolean
  showHeader?: boolean
  showFooter?: boolean
}

export default class Shell extends React.Component<IShellProps> {
  constructor (props: IShellProps) {
    super(props)
  }

  
  public render () {
    const { isAppLoading } = this.props
    if (isAppLoading) {
      return (
        <div>loading...</div>
      )
    }
    
    return(
      <React.Fragment>
        <Router>
          <div className='shell'>
            { this.props.showHeader && (
              <header className='shell__header'>
                {<Header />}
              </header>
            )}
            <div className='shell__body'>
              <aside className='shell__sidebar'>
                {<SideBar />}
              </aside>
              <section className='shell__main'>
                {<Content />}
              </section>
            </div>
            {this.props.showFooter && (
              <footer className='shell__footer'>
                {<Footer />}
              </footer>
            )}
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
