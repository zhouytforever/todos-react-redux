import React from 'react';
import TodoMainContainer from '../container/MainContainer';
import FooterContainer from '../container/FooterContainer'
import './App.css';

import TodoHeaderContainer from '../container/HeaderContainer';
class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="todo-wrap">
                    <TodoHeaderContainer />
                    <TodoMainContainer />
                    <FooterContainer/>
                </div>
            </div>
        );
    }
}

export default App;
