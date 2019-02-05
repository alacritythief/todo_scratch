import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import TodoInput from '../TodoInput';

interface TodoListState {
  todoItemArray: any[];
}

class TodoList extends Component<{}, TodoListState> {
  constructor (props: {}) {
    super(props);
    this.state = {
      todoItemArray: []
    }
  }

  addTodoItem = (item: string) => {
    let addArray = this.state.todoItemArray;
    let count = addArray.length
    addArray.push(
      <TodoItem 
        key={count}
        initItem={item}
      />
    );
    this.setState({
      todoItemArray: addArray
    });
  }

  render () {
    return (
      <React.Fragment>
        <ul>
          { this.state.todoItemArray }
        </ul>
        <TodoInput callback={this.addTodoItem}/>
      </React.Fragment>
    )
  }
}

export default TodoList;