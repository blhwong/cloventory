import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import axios from 'axios';
import clover from './lib/clover.jsx';
import Inventory from './components/Inventory.jsx';
import { Button } from 'react-bootstrap';
import DeletePopover from './components/DeletePopover.jsx';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      showDelete: false
    };
    this.setDeleteState = this.setDeleteState.bind(this);
  }

  componentDidMount() {
    this.props.clover.getItems((results) => this.setState({
      inventory: results
    }));
  }

  setDeleteState(state) {
    this.setState({
      showDelete: state
    });
  }

  render () {
    console.log(this);
    return (
      <div>
        <span>
          <h3>Inventory Items <Button className="button">Create</Button></h3>
        </span>
        <Inventory
          items={this.state.inventory}
          setDeleteState={this.setDeleteState}
        />
        <DeletePopover
          showDelete={this.state.showDelete}
          setDeleteState={this.setDeleteState}
        />
      </div>
    );
  }
}

ReactDOM.render(<App clover={clover}/>, document.getElementById('app'));
