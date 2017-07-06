import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import IconButton from 'material-ui/IconButton';
import {pjData} from './projData'
import './Project.css'

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

// Component that contains photo/giphy/screencapture etc.
function PhotoContainer(props) {
  return (
    <img className="pj-demo img-responsive" src={pjData[props.id].demo}></img>
  );
}

// Component that contains information of a project
function DescContainer(props) {
  return (
    <Card style={styles.card} className="pj-overlay">
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

    return (
      <div ref="Project">
        <div className="col-sm-1">
          { idCurrent > 0 &&
            <IconButton onTouchTap={this.handlePrev} style={styles.button}>
              <SkipPrevious/>
            </IconButton>
          }
        </div>
        <div className="col-sm-10">
          <h2>{pjData[idCurrent].project.title}</h2>
          <div className="pj-container">
            <PhotoContainer id={idCurrent}/>
            <DescContainer id={idCurrent}/>
          </div>
        </div>
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


export default Project
