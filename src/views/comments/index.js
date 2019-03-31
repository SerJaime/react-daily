import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import Header from '../../common/header';
import Bottom from './components/bottom';
import Scroll from '../../common/scroll';
import Comment from './components/comment';
import styles from './styles.styl';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const newsId = this.props.match.params.newsId;
    this.props.initComments(newsId);
  }

  componentDidUpdate(preProps) {
    if (preProps.showShortComments === false && this.props.showShortComments === true) {
      this.scroll.bScroll.scrollToElement('#loadShortBtn');
    }
  }

  handleClick() {
    const newsId = this.props.match.params.newsId;
    const { shortComments, getShortComments, showShortComments, toggleShortCommentsShow } = this.props;
    if (shortComments.size === 0) {
      getShortComments(newsId);
    }
    toggleShortCommentsShow(!showShortComments);
  }

  render() {
    const newsId = this.props.match.params.newsId;
    const { commentInfo, longComments, shortComments, showShortComments } = this.props;
    return (
      <Fragment>
        <Header title={`${commentInfo.get('comments') || 0} 条点评`} />
        <Scroll ref={(el) => { this.scroll = el; }}>
          <div className={styles.comments}>
            <div className={styles.title}>{`${commentInfo.get('long_comments') || 0} 条长评`}</div>
            {longComments.map(item => <Comment key={item.get('id')} comment={item} />)}
            <div id="loadShortBtn" onClick={this.handleClick} className={styles.title}>
              {`${commentInfo.get('short_comments') || 0} 条短评`}
              <span className={showShortComments ? styles.rotation : null}><i className="iconfont">&#xe612;</i></span>
            </div>
            {showShortComments ? 
              (
                <div className={styles.shortWrapper}>
                  {shortComments.map(item => <Comment key={item.get('id')} comment={item} />)}
                </div>
              )
              : null}
          </div>
        </Scroll>
        <Bottom id={newsId} />
      </Fragment>
    )
  }
}

export default Comments;