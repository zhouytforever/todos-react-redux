/**
 * Created by choyt on 17-3-10.
 */

import {connect} from 'react-redux'
import TodoHeader from '../components/TodoHeader'
import { addTodo } from '../actions'



const mapDispatchToProps =  ({
    addTodo: addTodo
})



export default connect(null,mapDispatchToProps)(TodoHeader)