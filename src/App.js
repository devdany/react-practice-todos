import React, {Component} from 'react';
import styled, {injectGlobal} from 'styled-components';
import PageTemplate from './components/PageTemplate';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import modules from './modules';

injectGlobal`
  body{
    background-color: lightcyan;
    margin: 0px;
  }
`

const store = createStore(modules);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <PageTemplate />
            </Provider>
        );
    }
}

export default App;
