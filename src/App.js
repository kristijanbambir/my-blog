import React, {Component} from 'react';
import Header from './Header';
import Post from './Post';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    let posts;

    if (this.state.posts.length === 0) {
      posts = <em>No posts to show</em>;
    } else {
      posts = this.state.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ));
    }

    return (
      <div className='container'>
        <Header />
        {posts}
      </div>
    );
  }

}
