import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: "initial message"};
  }

  componentWillMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    var $ = require ('jquery');
    $.getJSON(
      'http://localhost:3000/articles/1',
      (data) => this.setState({message: data['message']})
    );
  }

  render() {
    return (
      <div id="content">
        <h5>Time to <a href="https://facebook.github.io/react/">React</a>.</h5>
        <h4>Message = {this.state.message}</h4>
        <button className="square" onClick={() => $.get('http://127.0.0.1:3000/articles/1')} />
      </div>
    );
  }
}
