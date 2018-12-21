import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import './Post.css';
import { connect } from 'react-redux';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      img: '',
      content: '',
      username: '',
      password: '',
      id: 0,
      profile_pic: '',
      post_id: null
    };
  }
  componentDidMount() {
    axios
      .get(`/api/post/${this.props.match.params.id}`)
      .then(result => this.setState(result.data[0]))
  }
  render() {
    console.log(this.props)
    console.log(this.state);
    return (
      <div className="postman">
        <Nav />
        <div className="post">
          <h1>New Post</h1>
          <div>
            <h4>{this.state.title}</h4>
          </div>
          <img
            className="post_image"
            src={this.state.profile_pic}
            alt={this.state.username}
          />
          <div className="bottom_content_of_post">
            <h4>Image URL: {this.state.img}</h4>
            <h4>{this.state.content}</h4>
          </div>
          <button>Post</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { username, profile_pic } = state;
  return {
    username,
    profile_pic
  };
}

export default connect(mapStateToProps)(Post);
