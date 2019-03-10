import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Consumer } from '../../context/Consumer';
import Scroll from '../../common/scroll';
import Bar from './components/bar';
import styles from './styles.styl';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.newsId);
  }

  handleScroll(scroll) {
    const movingDirectionY = this.scroll.bScroll.movingDirectionY;
    const { showBottomBar, toggleBottomShow } = this.props;
    if (showBottomBar === false && movingDirectionY === -1) {
      toggleBottomShow(true);
    } else if (showBottomBar === true && movingDirectionY === 1) {
      toggleBottomShow(false);
    }
  }

  render() {
    const { match, post, showBottomBar } = this.props;
    const { URL_PICTURE } = this.props.context;

    return (
      <Fragment>
        <Scroll onScroll={this.handleScroll} ref={(el) => { this.scroll = el; }}>
          <div style={{minHeight: '101%'}}>
            <div style={{backgroundImage: `url(${URL_PICTURE}${post.image})`}} className={styles.titleWrapper}>
              <h2>{post.title}</h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: post.body}}></div>
          </div>
        </Scroll>
        {showBottomBar ? <Bar newsId={post.id} comments={post.comments} /> : null}
      </Fragment>
    )
  }
}

Detail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string
  })
};

export default Consumer(Detail);