import React, { Component, Fragment } from 'react';
import Header from '../../common/header';
import Banner from './components/banner';
import Item from '../../common/item';
import Scroll from '../../common/scroll';
import styles from './styles.styl';

class Index extends Component {
  componentDidMount() {
    this.props.changeIndexData();
  }

  render() {
    const { banners, todayNews } = this.props;
    const oneDayList = (list) => list.map((item) => (
      <Item item={item} />
    ))
    
    return (
      <Fragment>
        <Header title="今日热闻" />
        <Scroll>
          <div>
            {banners.size === 0 ? null : <Banner banners={banners} />}
            {todayNews.map((item) => (<Item key={item.get('id')} item={item} />))}
            {todayNews.map((item) => (<Item key={item.get('id')} item={item} />))}
          </div>
        </Scroll>
      </Fragment>
    )
  }
}

export default Index;