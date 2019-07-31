import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from './Input';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should call "addTodo"', async () => {
    const fn = jest.fn();
    const input = mount(
        <Input addTodo={fn}/>
    );

    input.find('input').simulate('change', {target: {value: 'TODO'}});
    input.find('form').simulate('submit');

    expect(fn).toBeCalledWith('TODO');
});