import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Item from './Item.jsx';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.innerHTML[0] === 'I') {
      if (this.props.sortNameAscending) {
        this.props.getItems(this.props.setInventory, '-name');
        this.props.setSortState(false, 'name');
      } else {
        this.props.getItems(this.props.setInventory, 'name');
        this.props.setSortState(true, 'name');
      }
    } else {
      this.props.sortQuantity();
      if (this.props.sortQuantityAscending) {
        this.props.setSortState(false, 'quantity');
      } else {
        this.props.setSortState(true, 'quantity');
      }
    }
  }

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th><a onClick={this.handleClick}>Item Name</a></th>
            <th><a onClick={this.handleClick}>Quantity</a></th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item, index) => {
            return <Item
                      item={item}
                      key={index}
                      setPopoverState={this.props.setPopoverState}
                      setId={this.props.setId}
                    />;
          })}
        </tbody>
      </Table>
    );
  }
}

export default Inventory;
