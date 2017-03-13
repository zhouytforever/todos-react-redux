/**
 * Created by choyt on 17-3-12.
 */

import TodoFooter from '../components/TodoFooter'
import {connect } from 'react-redux'
import {deleteAll} from '../actions'

let mapStateToProps = (state) => {
    return {
        doneCount:state.todos.reduce((pre,cur) => pre + cur.completed,0),
        todoCount:state.todos.length};
}
let mapDispatchToProps = ({deleteAll:deleteAll})


export default connect(mapStateToProps,mapDispatchToProps)(TodoFooter)



