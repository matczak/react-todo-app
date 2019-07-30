import React, {useState} from 'react';
import './TodoList.scss';
import Todo from '../Todo/Todo';
import Input from '../Input/Input';

export default function TodoList() {
    // eslint-disable-next-line
    const [todoList, setTodoList] = useState([{name: 'test'}, {name: 'test2'}]);

    const list = todoList.map((todo, index) => (<Todo name={todo.name} key={index}/>));
    
    const newTodoHanlder = (todo) => {
        const newTodoList = [...todoList, {name: todo}];
        setTodoList(newTodoList);
    }
    
    return (
        <div className="TodoList">
            <div className="TodoList__header">
                <div className="TodoList__header__text">
                    Todo App
                </div>
            </div>
            <div className="TodoList__content">
                <div className="TodoList__input">
                    <Input addTodo={newTodoHanlder}/>
                </div>
                <div className="TodoList__todos">
                    {list}
                </div>        
            </div>
        </div>
    );
}