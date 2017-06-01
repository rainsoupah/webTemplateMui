import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import IconButton from 'material-ui/IconButton';

// To Do:
//  1. Icon size larger, not visible currently

const styles = {
  paper: {
    // flex: 1,
    height: 300,
    maxWidth: 300,
    // margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  title: {
    fontSize:'16px',
    fontFamily: 'Tillana, Bold',
    textAlign: 'center',
  },
  card: {
    height: 300,
  },
  button: {
    marginTop: '150px',
    display:'flex',
    backgroundColor: '#fff',
  },
};

// Data source
const pjData = [
  {
    id: 0,
    project: {
      title: 'adipiscing elit',
      description: 'Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore. ',
      tags: 'Lorem ipsum dolor sit amet',
    },
    demo: 'https://c4.jalbum.net/static/icons/album/q/38/id/4054583/type/XLARGE/',
  },
  {
    id: 1,
    project: {
      title: 'adipiscing elit',
      description: 'Sportsman do offending supported extremity breakfast by listening.hj sdai fsdf asdiejf asdjk Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore. ',
      tags: 'Lorem ipsum dolor sit amet maskew sdas',
    },
    demo: 'http://fr.web.img2.acsta.net/c_300_300/pictures/16/08/18/12/39/337477.jpg',
  },
  {
    id: 2,
    project: {
      title: 'adipiscing elit',
      description: 'Sportsman do offending by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore. ',
      tags: 'Lorem ipsum dolor',
    },
    demo: 'https://c4.jalbum.net/static/icons/album/q/38/id/4054583/type/XLARGE/',
  },
];

// Component that contains photo/giphy/screencapture etc.
function PhotoContainer(props) {
  return (
    <div>
      <Paper style={styles.paper} zDepth={1}>
        <img src={pjData[props.id].demo}></img>
      </Paper>
    </div>
  );
}

// Component that contains information of a project
function DescContainer(props) {
  return (
    <Card style={styles.card}>
      <CardTitle title={pjData[props.id].project.title} subtitle={pjData[props.id].project.tags} titleStyle={styles.title} />
        <CardText>
              {pjData[props.id].project.description}
        </CardText>
    </Card>
  );
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCurrent: 0,
    };
  }

  handleNext = (event:object) => {
      this.setState({idCurrent: this.state.idCurrent + 1});
    // console.log(event.target.children.id);
  };

  handlePrev = (event:object) => {
    this.setState({idCurrent: this.state.idCurrent - 1});
    // console.log(event.target.children.id);
  };

  render () {

    let {idCurrent} = this.state;
    // <FloatingActionButton backgroundColor="#ffffff" style={styles.button} onTouchTap={this.handleNext}>
    //   N
    // </FloatingActionButton>
    // <FloatingActionButton backgroundColor="#ffffff" style={styles.button} onTouchTap={this.handlePrev}>
    //   <ZoomIn color="#000000"/>
    // </FloatingActionButton>

    return (
      <div ref="Project">
        <div className="col-sm-1">
          { idCurrent > 0 &&
            <IconButton onTouchTap={this.handlePrev} style={styles.button}>
              <SkipPrevious/>
            </IconButton>
          }
        </div>
        <div className="col-sm-5"> <PhotoContainer id={idCurrent}/> </div>
        <div className="col-sm-5"> <DescContainer id={idCurrent}/> </div>
        <div className="col-sm-1">
          { idCurrent < 2 &&
            <IconButton tooltip="SVG Icon" onTouchTap={this.handleNext} style={styles.button}>
                <SkipNext />
            </IconButton>
          }
        </div>
      </div>
    );
  }
}


export default Project;

// <Card>
//   <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg"/>
//
//   <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
//     <img src="images/nature-600-337.jpg" />
//   </CardMedia>
//
//   <CardTitle title="Card title" subtitle="Card subtitle" />
//     <CardText>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//     </CardText>
//
//     <CardActions>
//       <FlatButton label="Action1" />
//       <FlatButton label="Action2" />
//     </CardActions>
//
// </Card>
