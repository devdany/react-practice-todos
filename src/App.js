import React, {Component} from 'react';
import styled, {injectGlobal} from 'styled-components';
import PageTemplate from './components/PageTemplate';

injectGlobal`
  body{
    background-color: lightcyan;
    margin: 0px;
  }
`

class App extends Component {

    render() {
        return (
            <PageTemplate />
        );
    }
}

export default App;
