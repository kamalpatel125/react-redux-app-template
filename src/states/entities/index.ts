import * as actions from './actions'
import { STATE_KEY } from './constants'
import reducer from './reducer'
import * as selectors from './selectors'
import * as selectorTransforms from './selectorTransforms'

export default {
  STATE_KEY,
  actions,
  reducer,
  selectors : {
    ...selectors,
    ...selectorTransforms
  }
}
