var React = require("react");
var TodoList = require("TodoList");

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

  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
