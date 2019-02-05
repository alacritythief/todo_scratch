import React, { Component } from 'react';

interface TodoInputProps {
  callback: (item: string) => void;
}

interface TodoInputState {
  value: string;
}

class TodoInput extends Component<TodoInputProps, TodoInputState> {
  constructor (props: TodoInputProps) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value: event.currentTarget.value
    })
  }

  handleSumbit = (event: React.KeyboardEvent) => {
    if (event.key == 'Enter' && this.state.value !== "") {
      this.props.callback(this.state.value);
      this.setState({
        value: ""
      })
    }
  }

  render () {
    return (
      <React.Fragment>
        <input 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange}
          onKeyUp={this.handleSumbit}
        />
      </React.Fragment>
    )
  }
}

export default TodoInput;