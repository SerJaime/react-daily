import React, { Component, Fragment } from 'react';
import Header from '../../common/header';
import Banner from './components/banner';
import styles from './styles.styl';

class Index extends Component {
  componentDidMount() {
    this.props.changeIndexData()
  }

  render() {
    const { banners } = this.props;
    
    return (
      <Fragment>
        <Header title="今日热闻" />
        {banners.size === 0 ? null : <Banner banners={banners} />}
      </Fragment>
    )
  }
}

export default Index;