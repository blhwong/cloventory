import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DeletePopover.css';

const DeletePopover = () => {
  return (
    <Modal show={true} bsSize="sm">
      <Modal.Body>
        <p>Are you sure you want to delete?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Cancel</Button>
        <Button>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePopover;
