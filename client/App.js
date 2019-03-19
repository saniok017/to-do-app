import React, { Fragment } from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/title';

const App = baseUrl => (
  <Fragment>
    <Title title="ToDo App" />
    <ToDo baseUrl={baseUrl} />
  </Fragment>
);

export default App;
