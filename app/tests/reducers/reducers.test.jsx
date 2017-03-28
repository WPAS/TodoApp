var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: "Some search text"
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(true), df(action));

      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
          type: 'ADD_TODO',
          text: 'test the reducer'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: 12,
        text: 'dummy todo',
        completed: true,
        createdAt: 124,
        completedAt: 125
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 12
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);

    });
  });
});