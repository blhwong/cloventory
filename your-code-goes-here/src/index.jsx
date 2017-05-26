import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import axios from 'axios';
import clover from './lib/clover.jsx';
import Inventory from './components/Inventory.jsx';
import { Button } from 'react-bootstrap';
import DeletePopover from './components/DeletePopover.jsx';
import EditPopover from './components/EditPopover.jsx';
import CreatePopover from './components/CreatePopover.jsx';
import BarChart from './components/BarChart.jsx';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      showDelete: false,
      showEdit: false,
      showCreate: false,
      id: '',
      sortNameAscending: false,
      sortQuantityAscending: false
    };
    this.setPopoverState = this.setPopoverState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setInventory = this.setInventory.bind(this);
    this.setId = this.setId.bind(this);
    this.setSortState = this.setSortState.bind(this);
    this.sortQuantity = this.sortQuantity.bind(this);
  }

  componentDidMount() {
    this.props.clover.getItems((results) => this.setInventory(results)
    );
  }

  setSortState(state, type) {
    if (type === 'name') {
      this.setState({
        sortNameAscending: state
      });
    } else {
      this.setState({
        sortQuantityAscending: state
      });
    }
    console.log('sort state', this.state);
  }

  sortQuantity() {

    if (this.state.sortQuantityAscending) {
      this.state.inventory.sort((a, b) => {
        return a.stockCount - b.stockCount;
      });
    } else {
      this.state.inventory.sort((a, b) => {
        return b.stockCount - a.stockCount;
      });
    }
    // console.log('sorted quantity', sorted);
  }

  setId(id) {
    this.setState({
      id: id
    });
    console.log(this.state.id);
  }

  setInventory(results) {
    this.setState({
      inventory: results
    });
  }

  setPopoverState(state, type) {
    if (type === 'create') {
      this.setState({
        showCreate: state
      });
    } else if (type === 'edit') {
      this.setState({
        showEdit: state
      });
    } else {
      this.setState({
        showDelete: state
      });
    }
  }

  handleSubmit(type, name, quantity) {
    console.log(name, quantity);
    if (type === 'create') {
      this.props.clover.createItem(name, quantity, this.setInventory);
    } else if (type === 'edit') {
      this.props.clover.updateItem(this.state.id, name, quantity, this.setInventory);
    } else {
      this.props.clover.deleteItem(this.state.id, this.setInventory);
    }
  }

  render () {
    console.log(this);
    return (
      <div>
        <BarChart items={this.state.inventory} />
        <span>
          <h3>Inventory Items
            <Button
              className="button"
              onClick={() => {
                this.setPopoverState(true, 'create');
              }}
            >
            Create
            </Button>
          </h3>
        </span>
        <Inventory
          items={this.state.inventory}
          setPopoverState={this.setPopoverState}
          setId={this.setId}
          sortNameAscending={this.state.sortNameAscending}
          sortQuantityAscending={this.state.sortQuantityAscending}
          getItems={this.props.clover.getItems}
          setInventory={this.setInventory}
          setSortState={this.setSortState}
          sortQuantity={this.sortQuantity}
        />
        <DeletePopover
          showDelete={this.state.showDelete}
          setPopoverState={this.setPopoverState}
          handleSubmit={this.handleSubmit}
          setId={this.setId}
        />
        <EditPopover
          showEdit={this.state.showEdit}
          setPopoverState={this.setPopoverState}
          handleSubmit={this.handleSubmit}
          setId={this.setId}
        />
        <CreatePopover
          showCreate={this.state.showCreate}
          setPopoverState={this.setPopoverState}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

ReactDOM.render(<App clover={clover}/>, document.getElementById('app'));
