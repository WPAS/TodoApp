var React = require("react");
var moment = require("moment");

var Todo = React.createClass({
  render: function() {
    var { text, id, completed, createdAt, completedAt } = this.props;
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
      <div onClick={() => {
            this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }

});

module.exports = Todo;
