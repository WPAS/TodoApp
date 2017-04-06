var React = require("react");
var moment = require("moment");
var {connect} = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var { text, id, completed, createdAt, completedAt, dispatch } = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = 'Dodano ';
      var timestamp = createdAt;

      if (completed) {
        message = "Ukończone ";
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('D.M.YYYY r. o kk:mm');
    };

    return (
      <div className={todoClassName} onClick={() => {
          //this.props.onToggle(id);
          dispatch(actions.toggleTodo(id));
        }}>
        <div><input type="checkbox" checked={completed} /></div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }

});

export default connect()(Todo);
