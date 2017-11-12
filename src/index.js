import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { configureAnchors } from 'react-scrollable-anchor'

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms,
configureAnchors({offset: -51, scrollDuration: 1000, keepLastAnchorHash: true});

ReactDOM.render(<App />, document.getElementById('root'));