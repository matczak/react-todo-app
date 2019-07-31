import React, {useState} from 'react';
import './Input.scss';

export default function Input({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="Input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}