import React, {Component} from 'react';
import Header from './Header';
import Post from './Post';
import PostForm from './PostForm';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.handlePostCreate = this.handlePostCreate.bind(this);
  }

  handlePostCreate(post) {
    const posts = this.state.posts;
    posts.push(post);
    const sortedPosts = posts.sort((a, b) => a.date < b.date);
    this.setState({posts: sortedPosts});
  }

  render() {
    let posts;

    if (this.state.posts.length === 0) {
      posts = <em>No posts to show</em>;
    } else {
      posts = this.state.posts.map((post) => (
        <Post key={post.id} {...post} />
      ));
    }

    return (
      <div className='container'>
        <Header />
        <h2>{'All posts'}</h2>
        {posts}
        <hr />
        <h2>{'Crete new post'}</h2>
        <PostForm handleSubmit={this.handlePostCreate} />
      </div>
    );
  }

}
