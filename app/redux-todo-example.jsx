var redux = require('redux');

console.log('Starting Redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});
// unsubscribe();

var currentState = store.getState();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Zoeken'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Help'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Wateroverlast'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Roeiboot'
});
