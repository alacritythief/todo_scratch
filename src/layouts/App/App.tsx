import React, { Component } from 'react';
import { GlobalStyle } from '../../constants/global';
import {
  AppContainer,
  ContentContainer
} from '../../ui-components/containers';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyle/>
        <ContentContainer>
          <p>Hello World</p>
        </ContentContainer>
      </AppContainer>
    );
  }
}

export default App;
