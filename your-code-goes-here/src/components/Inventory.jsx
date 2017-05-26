import React from 'react';
import { Table } from 'react-bootstrap';
import Item from './Item.jsx';

const Inventory = (props) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => {
          return <Item
                    item={item}
                    key={index}
                    setPopoverState={props.setPopoverState}
                    setId={props.setId}
                  />;
        })}
      </tbody>
    </Table>
  );
};

export default Inventory;
