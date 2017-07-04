import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import ActionIcon from './ActionIcon';
import FlatButton from 'material-ui/FlatButton';
import './gallery.css';
// import Carousel from 'nuka-carousel';

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
  imageTitle: {
    fontFamily: 'Overlock',
  },
  imageHolder: {
    cursor: 'pointer',
  },
  tile: {
    padding: '0%',
    // float: 'left',
    display: 'inline-block'
  },
  carousel_image: {
    width: '1000px',
    height: '400px',
  }
};

const tilesData = [
  {
    img: 'http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/05/06/c7/top-10-southern-california-beaches-newport-beach.rend.hgtvcom.1280.720.jpeg',
    title: 'Tree',
    author: 'pashminu',
    size: " grid-item grid-item--width2"
  },
  {
    img: 'https://static1.squarespace.com/static/5136b36ae4b0a21e2c3b836a/t/5137da5fe4b072b5decc93fc/1362614880880/HuntingtonBeach-resized-600.jpg?format=750w',
    title: 'Sand',
    author: 'Danson67',
    size: " grid-item grid-item--height4"
  },
  {
    img: 'https://ak6.picdn.net/shutterstock/videos/3366077/thumb/1.jpg?i10c=img.resize(height:160)',
    title: 'Poker',
    author: 'fancycrave1',
    landscape: true,
    size: " grid-item"
  },
  {
    img: 'https://storage.googleapis.com/imgfave/image_cache/1356865063629682.jpg',
    title: 'Hats',
    author: 'Hans',
    size: " grid-item"
  },
  {
    img: 'http://www.thecanyon.com/assets/css/images/grandcanyon1.jpg',
    title: 'Honey',
    author: 'fancycravel',
    size: " grid-item"
  },
  {
    img: 'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/NC_DuncansCove_Seeff_1280x642_sized_downsized_0.jpg',
    title: 'Vegetables',
    author: 'jill111',
    size: " grid-item"
  },
  {
    img: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/720x450/public/1460995489/Black-Rock-Desert-Nevada-august-travel-BPTM0416.jpg?itok=XWQMQpVY',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    size: " grid-item grid-item--width2"
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/San_elijo_sunset.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    size: " grid-item grid-item--height3"
  },
];

// <GridTile key={tile.img} title={tile.title} titleStyle={{fontSize: '12px'}}
//         actionIcon={<ActionIcon imageSrc={tile.img}/>}
//         actionPosition="right" titlePosition="bottom"
//         titleBackground={backgroundColor} cols={1} rows={1}>
// </GridTile>
// <GridList cols={3} cellHeight={200} padding={0} style={styles.gridList}></GridList>

// class MyCarousel extends Component {
//   mixins: [Carousel.ControllerMixin];
//   render() {
//     return (
//       <Carousel slidesToShow={1}>
//           {
//             tilesData.map((tile, i) => (
//               <img key={i} src={tile.img} style={styles.carousel_image}/>
//             ))
//           }
//       </Carousel>
//     )
//   }
// }

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      current: 0
    }; //for modal

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
            {ATile}
              <Dialog
                 open={this.state.open}
                 overlayStyle={{backgroundColor: '#2a303a', opacity: 0.8}}
                 onRequestClose={this.handleClose}
                 contentClassName="crop"
                 bodyClassName="transparent"
                >
                <img src={tilesData[this.state.current].img} style={{float:'center'}}/>
              </Dialog>
        </div>
      </div>

    );
  }
}

export default Gallery;
