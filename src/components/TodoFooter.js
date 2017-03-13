import React from 'react';

class TodoFooter extends React.Component{

    render(){
        return(
            <div className="todo-footer">
                <span>
                    <span className="text-success">已经完成{this.props.doneCount}</span>
                     / 总共{this.props.todoCount}
                </span>
                <button onClick={this.props.deleteAll} className="btn btn-danger">删除全部完成事项</button>
            </div>
        )
    }
}

export default TodoFooter;