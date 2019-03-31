import React, { Component } from 'react';
import { Consumer } from '../../../context/Consumer';
import styles from '../styles.styl';
import { formatTime } from '../../../util';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBtn: false,
      showAllReply: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        showAllReply: !prevState.showAllReply
      }
    })
  }

  componentDidMount() {
    if (this.reply) {
      if (this.reply.clientHeight > 36) {
        this.setState({
          showBtn: true
        })
      }
    }
  }

  render() {
    const { comment } = this.props;
    const { URL_PICTURE } = this.props.context;
    const { showBtn, showAllReply } = this.state;
    const renderReplyElement = (reply) => {
      return reply.get('status') === 0 ? 
      (<div className={styles.replyWrapper}>
        <div ref={(el) => {this.reply = el;}} className={`${styles.reply} ${!showAllReply && showBtn ? styles.collapse : null}`}>
          <span>{`//${reply.get('author')}：`}</span>{reply.get('content')}
        </div>
        {showBtn ? <div className={styles.collapseBtn} onClick={this.handleClick}>{showAllReply ? '收起' : '展开'}</div> : null}
      </div>) 
      : 
      <div className={styles.errMsg}>{reply.get('error_msg')}</div>
    }

    return (
      <div className={styles.commentWrapper}>
        <div className={styles.avatar}>
          <img src={`${URL_PICTURE}${comment.get('avatar')}`} />
        </div>
        <div className={styles.comment}>
          <div className={styles.author}>{comment.get('author')}
            <span><i className="iconfont">&#xe64c;</i> {comment.get('likes')}</span>
          </div>
          <div className={styles.content}>{comment.get('content')}</div>
          { comment.get('reply_to') ? renderReplyElement(comment.get('reply_to')) : null }
          <div className={styles.time}>{formatTime(comment.get('time'))}</div>
        </div>
      </div>
    )
  }
}

export default Consumer(Comment);