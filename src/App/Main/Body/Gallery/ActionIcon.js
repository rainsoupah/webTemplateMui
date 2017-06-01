import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import './gallery.css';


class ActionIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}; //for modal
  }

  handleOpen = () => {
    this.setState({open: true});
    // console.log(this.props.location.pathname);
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleOpen}><ZoomIn color="white" /></IconButton>
        <Dialog
           open={this.state.open}
           overlayStyle={{backgroundColor: '#2a303a', opacity: 0.8}}
           onRequestClose={this.handleClose}
           contentClassName="crop"
           bodyClassName="transparent"
          >
          <img src={this.props.imageSrc} style={{float:'center'}}/>
        </Dialog>
      </div>
    );
  }
}

export default ActionIcon;
