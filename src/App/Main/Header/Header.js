import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import './Header.css';
import ActionFingerprint from 'material-ui/svg-icons/action/fingerprint';
import Menu from 'material-ui/svg-icons/navigation/menu';
// import FileCloud from 'material-ui/svg-icons/file/cloud';
// TO DO:

const styles = {
  labelStyle: {
    fontSize: '14px',
  },
  header_main: {
    borderColor: 'transparent',
    marginBottom: '0px',
    backgroundColor: '#fff'
  },
  header_navbar: {

  },
  button: {
    borderColor: 'transparent',
  },
  space: {
    width: '63.9%',
  },
  header_buttonList: {
    marginTop: '1.5%',
  }
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
          <FlatButton label={label} labelPosition="after"
            onTouchTap={this.handleClick.bind(this, id)} icon={<ActionFingerprint />}
            labelStyle={styles.labelStyle} primary={true}/>
      )
    } else {
      return (
          <FlatButton label={label} onTouchTap={this.handleClick.bind(this, id)} />
      )
    }
  }

// <div className="navbar-brand"> <FlatButton>Menu</FlatButton> </div>
  render() {
    return (
      <div>
      <nav className="navbar navbar-default" style={styles.header_main}>
        <div className="navbar-header" styles={styles.header_navbar}>

          <button type="button" data-target="#header-collapse" className="navbar-toggle" data-toggle="collapse" style={styles.button} >
            <Menu/>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="header-collapse">
          <ul ref="Header" className="nav navbar-nav" style={styles.header_buttonList}>
            <li>{this.renderButton("Gallery", "button1")}</li>
            <li>{this.renderButton("CV", "button2")}</li>
            <li>{this.renderButton("Project", "button3")}</li>
            <li>{this.renderButton("Contact", "button4")}</li>
          </ul>
        </div>

      </nav>

      <hr className="line" style={styles.line}></hr>
      </div>
    );
  }
}

export default Header;
