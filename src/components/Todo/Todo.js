import React, {useState} from 'react';
import './Todo.scss';

export default function Todo({name}) {
    const id = `${name}_${Date.now()}`;
    const [checked, setChecked] = useState(false);

    return (
        <div className="Todo">
            <input
                id={id} 
                type="checkbox" 
                value={checked}
                onChange={() => setChecked(!checked)}/>
            <label htmlFor={id} className={"Todo_label" + (checked ? '--checked' : '')}>{name}</label>
        </div>
    );
}