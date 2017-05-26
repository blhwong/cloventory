import React from 'react';
import { Table } from 'react-bootstrap';

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
    </Table>
  );
};

export default Inventory;
