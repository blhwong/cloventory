import React from 'react';
import './Item.css';

const Item = (props) => {

  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{props.item.stockCount}</td>
      <td className="icon">
        <span
          className="glyphicon glyphicon-pencil"
          onClick={() => {
            props.setPopoverState(true, 'edit');
          }}
        ></span>
      </td>
      <td className="icon">
        <span
          className="glyphicon glyphicon-trash"
          onClick={() => {
            props.setPopoverState(true, 'delete');
          }}
        ></span>
      </td>
    </tr>
  );
};

export default Item;
