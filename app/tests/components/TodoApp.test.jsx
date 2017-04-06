var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
import TodoList from 'TodoList';
var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it("should exist", () => {
      expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

// ******************
// commented tests below became obsolete when application started using Redux
//*******************

  // it("should add todo to the state.todos on handleAddTodo ", () => {
  //   var todoText = "test some component";
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />)
  //
  //   todoApp.setState({todos: []});
  //   todoApp.handleAddTodo(todoText);
  //
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  // });
  //
  //
  //
  // it("should toggle todo from completed to incompleted", () => {
  //   var todoData = {
  //     id: 11,
  //     text: "test features",
  //     completed: true,
  //     createdAt: '1',
  //     completedAt: '2'
  //   };
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  // });
});
