import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import './Header.css';
import ActionFingerprint from 'material-ui/svg-icons/action/fingerprint';
// import FileCloud from 'material-ui/svg-icons/file/cloud';
// TO DO:

const styles = {
  labelStyle: {
    fontSize: '20px',
  },
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    // console.log(id);
    this.props.onTabChange(id);
  }

  renderButton(label, id) {
    if (this.props.tab == id) {
      return (
        <span>
          <FlatButton label={label} labelPosition="after"
            onTouchTap={this.handleClick.bind(this, id)} icon={<ActionFingerprint />}
            labelStyle={styles.labelStyle}/>
        </span>
      )
    } else {
      return (
          <FlatButton label={label} onTouchTap={this.handleClick.bind(this, id)} />
      )
    }
  }
  //
  // <span><FlatButton label="CV" onTouchTap={this.handleClick.bind(this, "button2")} /></span>
  // <span><FlatButton label="Project" onTouchTap={this.handleClick.bind(this, "button3")} /></span>
  // <span><FlatButton label="Contact" onTouchTap={this.handleClick.bind(this, "button4")} /></span>
  render() {
    return (
      <div ref="Header">
          {this.renderButton("Gallery", "button1")}
          {this.renderButton("CV", "button2")}
          {this.renderButton("Project", "button3")}
          {this.renderButton("Contact", "button4")}
        <hr className="line"></hr>
      </div>

    );
  }
}

export default Header;
