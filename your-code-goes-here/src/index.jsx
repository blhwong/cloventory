import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import axios from 'axios';
import clover from './lib/clover.jsx';
import Inventory from './components/Inventory.jsx';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.props.clover.getItems((results) => this.setState({
      inventory: results
    }));
  }

  render () {
    console.log(this);
    return (
      <div>
        <span>
          <h3>Inventory Items <Button>Create</Button></h3>
        </span>
        <Inventory items={this.state.inventory}/>
      </div>
    );
  }
}

ReactDOM.render(<App clover={clover}/>, document.getElementById('app'));
