import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import ActionIcon from './ActionIcon';
import FlatButton from 'material-ui/FlatButton';
import './gallery.css';
import {tilesData} from './GalleryData'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    // height: 600,
    overflowY: 'hidden',
  },
  tile: {
    padding: '0%',
    // float: 'left',
    display: 'inline-block'
  },
  modal_img: {

  },
  modal: {
    // width: "100%",
    paddingTop: "0px",
  },
  modal_body: {
    // width: '100%',
    padding: 0,
    fontSize: '14px',
  },
  imageHolder: {
    cursor: 'pointer',
  },
  caption_title: {
    fontSize: '14px',
    textAlign: 'left',
    // position: 'relative',
    // float: 'left',
    // top: '20px',
    color: 'antiquewhite',
    backgroundColor: 'black',
    alpha: '0.5',
    fontFamily: 'OverLock, Cursive'
  },
  caption_subtitle: {
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '5%',
    color: 'white',
  },
  modal_action: {
    // width: '100%',
    fontSize: '16px',
  },
  modal_content_landscape: {
    maxWidth: '72%',
    fontSize: '17px',
    transform: 'inherit',
    position: 'absolute',
    top: '10%',
    right: '15%',
  },
  modal_content_portrait: {
    maxWidth: '41%',
    transform: 'inherit',
    position: 'absolute',
    top: '5%',
    right: '30%',
  }
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      current: 0,
      loading: true,
    }; //for modal

  }
  componentWillMount() {
    this.setState({
      loading: true,
    })
  }
  componentDidMount() {
    this.setState({
      loading: false,
    })
  }
  handleOpen = (tile_index) => {
    this.setState({
      open: true,
      current: tile_index
    });
    // console.log(this.props.location.pathname);
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const backgroundColor="linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%)";
    const ATile=tilesData.map((tile, tile_index) => (
      <div style={styles.imageHolder} onClick={this.handleOpen.bind(this,tile_index)}>
        <img src={tile.img} className="img-responsive"/>
      </div>
    ));

    return (
      <div id="container">
        <div id="myContent">
          {
            this.state.loading &&
            <div> APP IS LOADING Please be patient</div>
          }
          {
            !this.state.loading &&
            <div>
              {ATile}
              <Dialog
                 open={this.state.open}
                 overlayStyle={{backgroundColor: '#2a303a', opacity: 0.8}}
                 onRequestClose={this.handleClose}
                 contentStyle = {tilesData[this.state.current].landscape ? styles.modal_content_landscape : styles.modal_content_portrait}
                 bodyStyle={styles.modal_body}
                >
                <div>
                  <div style={styles.caption_title}> {tilesData[this.state.current].title} | {tilesData[this.state.current].location}</div>
                  <img src={tilesData[this.state.current].img} className="img-responsive"/>
                </div>
              </Dialog>
            </div>

          }
        </div>
      </div>

    );
  }
}

export default Gallery;
