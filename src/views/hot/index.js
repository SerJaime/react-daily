import React, { Component, Fragment } from 'react';
import Header from '../../common/header';
import Item from '../../common/item';
import Scroll from '../../common/scroll';
import styles from './styles.styl';

class Hot extends Component {
  componentDidMount() {
    this.props.getHotNews();
  }

  render() {
    return (
      <Fragment>
        <Header title="热门文章" menu />
        <Scroll>
          <div className={styles.listWrapper} style={{minHeight: '101%'}}>
            {this.props.hotNews.map(item => (<Item key={item.get('news_id')} item={item.toJS()} />))}
          </div>
        </Scroll>
      </Fragment>
    )
  }
}

export default Hot;