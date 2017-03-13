/**
 * Created by choyt on 17-2-26.
 */

import { combineReducers } from 'redux'
import todos from './todos'

const todoApp = combineReducers({
    todos
})

export default todoApp