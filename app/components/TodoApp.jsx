var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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

  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
