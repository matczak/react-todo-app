import React, {useState} from 'react';
import './TodoList.scss';
import Todo from '../Todo/Todo';

export default function TodoList() {
    // eslint-disable-next-line
    const [todoList, setTodoList] = useState([{name: 'test'}, {name: 'test2'}]);

    const list = todoList.map(todo => (<Todo name={todo.name}></Todo>));
    
    return (
        <div className="TodoList">
            <div className="TodoList_input"></div>
            <div className="TodoList_todos">
                {list}
            </div>        
        </div>
    );
}