import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';

import Paper from 'material-ui/Paper';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = {tab: "button1"};
  }

  handleTabChange(tab) {
    this.setState({tab});
  }

  render() {
    return (
      <div ref="MAIN">
        <Header tab={this.state.tab} onTabChange={this.handleTabChange}/>
        <Body tab={this.state.tab} />
      </div>

    );
  }
}

export default Main;
