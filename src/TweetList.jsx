import React, { Component } from 'react';
import Tweet from './Tweet';

class TweetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      lastTweet: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tweet !== this.state.lastTweet) {
      this.state.tweets.push(nextProps.tweet);
      this.setState({
        tweets: this.state.tweets,
        lastTweet: nextProps.tweet
      })
    }
  }

  render(){
    return (
      <div className="row-fluid">
        <ul className="list-unstyled">
          { this.state.tweets.map( (tweet, idx) => <Tweet key={idx} tweet={tweet} /> ) }
        </ul>
      </div>
    );
  }
};

export default TweetList;