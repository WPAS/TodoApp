var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require('AddTodo');
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: "learn React"
        },
        {
          id: 2,
          text: "play a little ;)"
        },
        {
          id: 3,
          text: "prepare for PHP test"
        },
        {
          id: 4,
          text: "clean up room"
        },
      ]
    };
  },

  handleAddTodo: function(text) {
    alert("new todo: " + text);
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
