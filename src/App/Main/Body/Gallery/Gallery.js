import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import ActionIcon from './ActionIcon';
import './gallery.css';

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
  frame: {

  },
  tile: {
    padding: '0%',
    // float: 'left',
    display: 'inline-block'
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

class Gallery extends Component {

  render() {
    const backgroundColor="linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%)";
    const ATile=tilesData.map((tile) => (
        <img src={tile.img} className="img-responsive"/>
    ));
    return (
      <div className="myContent">
          {ATile}
      </div>
    );
  }
}

export default Gallery;
