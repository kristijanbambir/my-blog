import React, {PropTypes} from 'react';

function formatDate(date) {
  return date.toLocaleDateString('hr-HR', {hour: '2-digit', minute: '2-digit'});
}

const Post = (props) => (
  <div>
    <h2>{'All posts'}</h2>
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>{props.post.title}</h3>
      </div>
      <div className='panel-body'>
        <p>{props.post.content}</p>
        <p className='text-muted'>{formatDate(props.post.date)}</p>
      </div>
    </div>
    <hr />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};

export default Post;
