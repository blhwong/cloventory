import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import axios from 'axios';
import clover from './lib/clover.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this);
    return (
      <div>
      Hello World!
      </div>
    );
  }
}

ReactDOM.render(<App clover={clover}/>, document.getElementById('app'));
