import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/header';
import Banner from './components/banner';
import Item from '../../common/item';
import Scroll from '../../common/scroll';
import styles from './styles.styl';
import { formatDate } from '../../util';

class Index extends Component {
  constructor(props) {
    super(props);

    this.handlePullingUp = this.handlePullingUp.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    this.props.changeIndexData();
  }

  componentDidUpdate(preProps) {
    if (preProps.beforeNewsList.size !== this.props.beforeNewsList.size) {
      const { changeIsPullUpLoad, changeUpdatedDay, beforeNewsList } = this.props;
      changeIsPullUpLoad(false);
      changeUpdatedDay(beforeNewsList.last().date);
      this.scroll.refresh();
    }
  }

  handlePullingUp() {
    const { changeIsPullUpLoad, loadMoreNews, updatedDate } = this.props;
    loadMoreNews(updatedDate);
  }

  handleScroll(scroll) {
    this.props.changeHeaderShow(scroll);
  }

  render() {
    const { showHeader, banners, todayNews, isPullUpLoad, beforeNewsList, loadMoreNews, updatedDate } = this.props;
    const oneDayList = listWithDate => (
      <div key={listWithDate.date}>
        <div id={listWithDate.date} className={styles.dateBar}>{formatDate(listWithDate.date)}</div>
        {listWithDate.stories.map(item => (<Item key={item.id} item={item} />))}
      </div>
    )
    
    return (
      <Fragment>
        <Header title="今日热闻" showHeader={showHeader} />
        <Scroll onPullingUp={this.handlePullingUp} onScroll={this.handleScroll} ref={(el) => { this.scroll = el; }}>
          <div style={{minHeight: '101%'}}>
            {banners.size === 0 ? null : <Banner banners={banners} />}
            {todayNews.map((item) => (<Item key={item.get('id')} item={item.toJS()} />))}
            {beforeNewsList.map(listWithDate => oneDayList(listWithDate))}
            <div className={styles.loadMoreTxt}>上拉加载更多</div>
          </div>
        </Scroll>
      </Fragment>
    )
  }
}

Index.propsTypes = {
  banners: PropTypes.array,
  showHeader: PropTypes.bool,
  todayNews: PropTypes.array,
  updatedDate: PropTypes.string,
  beforeNewsList: PropTypes.array
}

export default Index;