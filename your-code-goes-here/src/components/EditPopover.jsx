import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FormControl, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import _ from 'lodash';

class EditPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      itemName: ''
    };
  }

  render() {
    return (
      <Modal show={this.props.showEdit} bsSize="sm">
        <Modal.Header>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                label="Item Name"
                placeholder="Item Name"
              />
          <DropdownButton
            title={this.state.quantity.toString()}
            key={this.state.quantity}
            className="btn"
            id={`dropdown-basic-${this.state.quantity}`}
          >
            {_.range(20).map((key) => {
              return <MenuItem eventKey={key} key={key}>{key}</MenuItem>;
            })}
          </DropdownButton>
              </FormGroup>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              this.props.setPopoverState(false, 'edit');
            }}
          >Cancel</Button>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditPopover;
