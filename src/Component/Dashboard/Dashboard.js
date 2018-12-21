import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      posts2: [],
      search: '',
      userposts: true,
      checkbox: true
    };
  }

  componentDidMount() {
    this.getUserPosts();
  }

  getUserPosts = () => {
    axios
      .get(`api/posts`)
      .then(results => this.setState({ posts: results.data }));
  };

  get_query = () => {
    let query = this.state.search.split(' ').join('+')
    axios.get(`/api/other?search=${query}`).then(res => this.setState({posts: res.data}))
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  reset_search = () => {
    this.setState({ search: '' });
  };
  xbox = () => {
    this.setState({ checkbox: !this.state.checkbox });
  };

  render() {
    let only_other_posts = this.state.posts
      // .filter(elem => elem.username != this.props.username)
      // .filter(elem =>
      //   elem.title.toUpperCase().includes(this.state.search.toUpperCase())
      // )
      .map(elem => (
        <Link to={`/posts/${elem.post_id}`}>
          <div className="posts">
            <h2>{elem.title}</h2>
            <div className="poster">
              <p>by {elem.username}</p>
              <img
                className="navImg profileImg"
                src={elem.profile_pic}
                alt={elem.username}
              />
            </div>
          </div>
        </Link>
      ));

    let all_posts = this.state.posts
      // .filter(elem =>
      //   elem.title.toUpperCase().includes(this.state.search.toUpperCase())
      // )
      .map(elem => (
        <Link to={`/post/post=${elem.post_id}`}>
          <div className="posts">
            <h2>{elem.title}</h2>
            <div className="poster">
              <p>- {elem.username}</p>
              <img
                className="navImg profileImg"
                src={elem.profile_pic}
                alt={elem.username}
              />
            </div>
          </div>
        </Link>
      ));
    return (
      <div className="Dashboard">
        <Nav />
        <div className="top_dash">
          <input
            id="search_by_title"
            placeholder="Search by title"
            value={this.state.search}
            onChange={e => this.handleChange(e)}
          />
          
          <button id="search" onClick={() => this.get_query()} />
          <button id="reset" onClick={() => this.reset_search()}>
            {' '}
            My Posts:
          </button>
          <input
            id="my_posts"
            type="checkbox"
            defaultChecked
            onClick={() => this.xbox()}
          />
        </div>
        <div className="bottom_dash">
          {this.state.checkbox ? all_posts : only_other_posts}
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

export default connect(mapStateToProps)(Dashboard);
