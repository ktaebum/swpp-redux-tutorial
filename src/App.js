import React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';

function App(props) {
 return (
 <ConnectedRouter history={props.history}>
 <div className='App'>
 ...
 </div>
 </ConnectedRouter>
 )
}

export default App;
