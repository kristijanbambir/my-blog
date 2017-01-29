import React, {Component} from 'react';

export default class Post extends Component {

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{this.props.title}</h3>
        </div>
        <div className='panel-body'>
          {this.props.content}
        </div>
        <div className='panel-footer'>
          {this.props.date.toLocaleDateString('hr-HR', {hour: '2-digit', minute: '2-digit'})}
        </div>
      </div>
    );
  }

}
