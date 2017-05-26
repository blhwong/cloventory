import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DeletePopover.css';

class DeletePopover extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleSubmit('delete', null, null);
    this.props.setPopoverState(false, 'delete');
  }

  render() {
    return (
      <Modal show={this.props.showDelete} bsSize="sm">
        <Modal.Body>
          <p>Are you sure you want to delete?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              this.props.setPopoverState(false, 'delete');
              this.props.setId('');
            }}
          >Cancel</Button>
          <Button
            onClick={this.handleClick}
          >Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DeletePopover;
