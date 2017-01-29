import React from 'react';

const Comment = (props) => (
  <div>
    <p>{props.content}</p>
    <p><small>{props.author}, <span className='text-muted'>{props.date}</span></small></p>
  </div>
);

export default Comment;
