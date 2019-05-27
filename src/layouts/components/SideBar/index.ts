import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { IState } from '../../../states/store'
import entities from '../../../states/entities'
import SideBar, { ISideBarProps, ISideBarAction } from './SideBar'

const mapStateToProps = (state: IState): ISideBarProps => {
  return {
    close : entities.selectors.getSideBarState(state)
  }
}

const mapDispatchToProps = (dispatch: any): ISideBarAction => {
  return {
    toggleSideBar: () => dispatch(entities.actions.toggleSideBar())
  }
}

const containerComponent: any = connect(mapStateToProps, mapDispatchToProps)(SideBar)
export default withRouter(containerComponent)
