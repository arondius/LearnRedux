var redux = require('redux');
console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log(require('./store/configureStore'));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank" >View your location</a>';
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState ', currentState);

store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Arend'));
store.dispatch(actions.addHobby('walking'));
store.dispatch(actions.addHobby('running'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('Jaws', 'thriller'));
store.dispatch(actions.addMovie('Oh brother where art thou', 'thriller'));
store.dispatch(actions.removeMovie(2));
store.dispatch(actions.changeName('Olga'));
