import React, { Component } from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer
} from '../../ui-components/containers';
import TodoList from '../../components/TodoList';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyle/>
        <ContentContainer>
          <p>Reminder List</p>
          <TodoList/>
        </ContentContainer>
      </AppContainer>
    );
  }
}

export default App;
