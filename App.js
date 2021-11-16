import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Navigation from './src/Navigations';
import reducer from './src/Store/reducers/postsReducer';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
