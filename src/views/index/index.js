import React, { Component, Fragment } from 'react';
import Header from '../../common/header';
import Banner from '../../common/banner';

class Index extends Component {

  componentDidMount() {
    this.props.changeHomeData();
  }

  render() {
    const { banners } = this.props;
    return (
      <Fragment>
        <Header title="首页" />
        <Banner banners = {banners}></Banner>
      </Fragment>
    )
  }
}

export default Index;