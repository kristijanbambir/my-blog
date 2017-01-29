import React, {Component} from 'react';
import Comment from './Comment';

function formatDate(date) {
  return date.toLocaleDateString('hr-HR', {hour: '2-digit', minute: '2-digit'});
}

export default class Post extends Component {
  render() {
    return (
      <div>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>{this.props.title}</h3>
          </div>
          <div className='panel-body'>
            <p>{this.props.content}</p>
            <p className='text-muted'>
              {formatDate(this.props.date)}
            </p>
          </div>
        </div>
        {this.props.comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            content={comment.content}
            date={formatDate(comment.date)}
          />
        ))}
      </div>
    );
  }

}
