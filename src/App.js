import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.styl';
import Index from './views/index';
import Detail from './views/detail';
import Hot from './views/hot';
import History from './views/history';
import Sections from './views/sections';

class App extends Component {

  render() {
    return (
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
    );
  }
}

export default App;
