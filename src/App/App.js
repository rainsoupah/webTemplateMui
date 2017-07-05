import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap property
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from './Main/Main'
import KeyWords from './KeyWords/KeyWords'
import SocialMedia from './SocialMedia'

const styles={
  sun: {
    height: 200,
    width: 200,
    align: "left",
  },
}

// <img style={styles.sun} src="https://media.giphy.com/media/10d3NDzD40xb0s/giphy.gif"/>

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-1 sidenav">
          </div>
          <div className="col-sm-10">
            <Main/>
          </div>
          <div className="col-sm-1 sidenav">
          </div>
        </div>
      </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
