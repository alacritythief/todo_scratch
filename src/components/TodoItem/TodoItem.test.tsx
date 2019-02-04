import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

const textArray: string[] = [
  'Buy Eggs',
  'Buy Milk',
  'Buy Bread',
  'Make French Toast',
  'Walk the dog',
  'Pet my cat',
]

function randomText () {
  let max: number = textArray.length - 1;
  return textArray[Math.floor(Math.random() * Math.floor(max))]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoItem initItem={ randomText() }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
