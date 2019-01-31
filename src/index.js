import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

const Index = () => {
  return (
    <div>
      <h1>Hello Webpack React</h1>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
