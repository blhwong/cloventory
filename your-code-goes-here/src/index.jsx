import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import axios from 'axios';
import clover from './lib/clover.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clover.getItems((results) => console.log(results));
  }

  render () {
    console.log(this);
    return (
      <div>
      <button onClick={this.props.clover.createItem}>Create</button>
      <button onClick={this.props.clover.deleteItem}>Delete</button>
      <button onClick={this.props.clover.updateItem}>Update</button>
      </div>
    );
  }
}

ReactDOM.render(<App clover={clover}/>, document.getElementById('app'));
