import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FormControl, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import _ from 'lodash';

class CreatePopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      quantity: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e, type) {
    if (type === 'item') {
      this.setState({
        itemName: e.target.value
      });
    } else {
      this.setState({
        quantity: e
      });
    }
  }

  handleClick() {
    this.props.handleSubmit('create', this.state.itemName, this.state.quantity);
    this.props.setPopoverState(false, 'create');
  }

  render() {
    return (
      <Modal show={this.props.showCreate} bsSize="sm">
        <Modal.Header>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                label="Item Name"
                placeholder="Item Name"
                onChange={(e) => {
                  this.handleChange(e, 'item');
                }}
              />
          <DropdownButton
            title={this.state.quantity.toString()}
            key={this.state.quantity}
            onSelect={(e) => {
              this.handleChange(e, 'quantity');
            }}
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
              this.props.setPopoverState(false, 'create');
            }}
          >Cancel</Button>
          <Button
            onClick={this.handleClick}
          >Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreatePopover;
