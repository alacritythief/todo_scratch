import React, { Component } from 'react';

interface TodoItemProps {
  initItem: string;
}

interface TodoItemState {
  item: string;
}

class TodoItem extends Component<TodoItemProps, TodoItemState> {
  constructor (props: TodoItemProps) {
    super(props);
    this.state = {
      item: this.props.initItem
    }
  }

  render () {
    return (
      <li>
        { this.state.item }
      </li>
    )
  }
}

export default TodoItem;