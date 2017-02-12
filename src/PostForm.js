import React, {Component, PropTypes} from 'react';

export default class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({
      id: this.uniqueId(),
      title: this.state.title,
      content: this.state.content,
      date: new Date()
    });
    this.setState({
      title: '',
      content: ''
    });
  }

  uniqueId() {
    return Math.random().toString(36).substr(2, 16);
  }

  render() {
    return (
      <div>
        <h2>{'Crete new post'}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='author'>Title</label>
            <input
              name='title'
              type='text'
              className='form-control'
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group'>
            <label>Content</label>
            <textarea
              name='content'
              className='form-control'
              rows={5}
              value={this.state.content}
              onChange={this.handleInputChange}
            />
          </div>
          <input type='submit' value='Submit' className='btn btn-primary' />
        </form>
      </div>
    );
  }

}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
