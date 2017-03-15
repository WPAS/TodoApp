var React = require("react");

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var newTodo = this.refs.todoText.value;

    if (newTodo.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(newTodo);
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Add new thing to do" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;