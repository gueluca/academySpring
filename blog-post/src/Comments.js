import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import axios from 'axios';

class Comments extends Component {
  renderComment = ({ id, name, body, email }) => (
    <Panel key={id}>
      <Panel.Heading>{name}</Panel.Heading>
      <Panel.Body>{body}</Panel.Body>
      <Panel.Footer>{email}</Panel.Footer>
      <button onClick={()=>this.deleteComm(id)}>{'delete'}</button>
    </Panel>
  )
  deleteComm= (id) => {
    axios({
      method: 'delete',
      url: 'https://jsonplaceholder.typicode.com/posts'+id,
    })
}
  render() {
    return (
      <div>
        {this.props.comments.map(this.renderComment)}
      </div>
    )
  }
}

export default Comments;
