import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

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
    addArray.push(
      <TodoItem initItem={item}/>
    );
    this.setState({
      todoItemArray: addArray
    });
  }

  render () {
    return (
      <ul>
        { this.state.todoItemArray }
      </ul>
    )
  }
}

export default TodoList;