import {connect} from 'react-redux'
import Todomain from '../components/TodoMain'
import { toggleTodo,deleteTodo } from '../actions'


const mapStateToProps = (state) => ({
    todos: state.todos,
})

const mapDispatchToProps =  ({
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo
})


export default connect(mapStateToProps,mapDispatchToProps)(Todomain)