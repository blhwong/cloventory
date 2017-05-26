import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DeletePopover.css';

const DeletePopover = (props) => {
  return (
    <Modal show={props.showDelete} bsSize="sm">
      <Modal.Body>
        <p>Are you sure you want to delete?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.setDeleteState(false);
          }}
        >Cancel</Button>
        <Button>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePopover;
