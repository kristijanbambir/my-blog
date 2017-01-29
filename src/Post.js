import React, {PropTypes} from 'react';

function formatDate(date) {
  return date.toLocaleDateString('hr-HR', {hour: '2-digit', minute: '2-digit'});
}

const Post = (props) => (
  <div>
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>{props.title}</h3>
      </div>
      <div className='panel-body'>
        <p>{props.content}</p>
        <p className='text-muted'>
          {formatDate(props.date)}
        </p>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date)
};

export default Post;
