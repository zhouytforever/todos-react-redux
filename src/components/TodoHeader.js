
import React from 'react';

class TodoHeader extends React.Component {

    handleKeyUp(e) {
        if(e.keyCode === 13){
            let inputValue = e.target.value;
            e.preventDefault();
            if (!inputValue.trim()) {
                return
            }
            this.props.addTodo(inputValue);
            e.target.value = '';
        }

    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp.bind(this)} placeholder="请输入待办事项，回车完成"/>
            </div>
        )
    }


}


export default TodoHeader;