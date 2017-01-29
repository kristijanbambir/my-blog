import React, {Component} from 'react';
import Header from './Header';
import Post from './Post';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [{
        id: 0,
        title: 'First post',
        content: 'Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.',
        date: new Date(),
        comments: [{
          id: 0,
          author: 'Kristijan',
          content: 'Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: new Date()
        }, {
          id: 1,
          author: 'Marko',
          content: 'Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
          date: new Date()
        }]
      }]
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
          comments={post.comments}
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
