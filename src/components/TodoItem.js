
// import React,{PropTypes} from 'react';
import React from 'react';

import ReactDOM from 'react-dom';

class TodoItem extends React.Component{

    handleChange(e){
        let className = !this.props.completed ? 'task-done' : '';
        this.props.toggleTodo(this.props.id)
        ReactDOM.findDOMNode(this.refs.span).className = className;
    }

    handleMouseOver(e){
        ReactDOM.findDOMNode(this).style.background = "#aaa";
        ReactDOM.findDOMNode(this.refs.delButton).style.display = "inline-block";
    }

    handleMouseOut(e) {
        ReactDOM.findDOMNode(this).style.background = "#fff";
        ReactDOM.findDOMNode(this.refs.delButton).style.display = "none";
    }

    handleDelete(e){
        this.props.deleteTodo(this.props.id)
    }

    render(){
        let className = this.props.completed ? 'task-done' : '';
        return (
            <li onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >
                <label>
                    <input type="checkbox" checked={this.props.completed} onChange={this.handleChange.bind(this)}/>
                    <span ref="span"className={className}>{this.props.text}</span>
                </label>
                <button onClick={this.handleDelete.bind(this)} className="btn btn-danger" ref="delButton">删除</button>
            </li>
        )
    }
}
//
// TodoItem.propTypes = {
//     todo: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired,
//     toggleTodo: PropTypes.func.isRequired,
//     deleteTodo: PropTypes.func.isRequired,
//
// }

export default TodoItem;