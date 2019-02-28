import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import styles from './App.styl';
import Index from './containers/index';
import Detail from './views/detail';
import Hot from './views/hot';
import History from './views/history';
import Sections from './views/sections';
import store from './store';
import Context, { context } from "./context";

class App extends Component {

  render() {
    return (
      <Context.Provider value={context}>
        <Provider store={store}>
          <div className={styles.view}>
            <BrowserRouter>
              <Switch>
                <Route path='/' exact component={Index} />
                <Route path='/detail/:newsId' component={Detail} />
                <Route path='/hot' component={Hot} />
                <Route path='/history' component={History} />
                <Route path='/sections' component={Sections} />
              </Switch>
            </BrowserRouter>
          </div>
        </Provider>
      </Context.Provider>
    );
  }
}

export default App;
