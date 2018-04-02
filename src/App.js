import React, { Component } from 'react';
import $ from "jquery";
import io from 'socket.io-client';
import SearchBar from './SearchBar';
import TweetList from './TweetList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
      query: '',
    };
    this.socket = io.connect('http://localhost:4000');    
  }

  postSearch (endpoint, data, cb) {
    $.ajax({
      type: "POST",
      url: endpoint,
      data: data
    }).done((data) => {
      console.log(data);
      cb(data);
    }).fail((err) => {
      console.log('error', err);
    });
  };

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const option = {
      query: this.state.query
    };
    this.postSearch(
      'http://localhost:4000/search', 
      option, 
      (data) => {
        console.log(data);
      }
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.tweet === this.state.tweet) {
      return false;
    }
    return true;
  }

  render() {
    const that = this;    
    this.socket.on('tweet', (data) => {
      that.setState({
        tweet: data
      });
    });
    return (
      <div className="container">
        <center className="container-body">
          <h1>Live Twitter Feed</h1>
          <SearchBar query={this.state.query} change={this.handleChange.bind(this)} submit={this.handleSubmit.bind(this)}/>
          <TweetList tweet={this.state.tweet}/>
        </center>
      </div>
    );
  }
}

export default App;
