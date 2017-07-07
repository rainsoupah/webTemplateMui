import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
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

const PhotoContainer = ({img}) => (
  <img className="pj-screenshot img-responsive col-sm-4" src={img}></img>
)

const DemoContainer = ({id}) => (
  <img className="pj-demo img-responsive col-sm-7" src={pjData[id].demo}></img>
)

// Component that contains information of a project
function DescContainer(props) {
  return (
    <div className="pj-container col-sm-5">
      <h2 className="pj-title">{pjData[props.id].project.title}</h2>

      <h3 className="pj-description"> {pjData[props.id].project.description} </h3>

      <div className="pj-tags">
        {pjData[props.id].project.tags.map((tag) => (
            <Chip>
              {tag}
            </Chip>
          ))}
      </div>
      <div className="pj-overlay">
        <p className="pj-details">
          {pjData[props.id].project.details}
        </p>
        <a class="github-button"
          href={pjData[props.id].project.github}>
          <i className="fa fa-github" aria-hidden="true"></i>
          View on GitHub
        </a>
      </div>
    </div>
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

          <div className="row pj-top-section">
            <DescContainer id={idCurrent}/>
            <DemoContainer id={idCurrent}/>
          </div>
          <div className="row">
            {pjData[idCurrent].screenshots.map((screenshot) => (
              <PhotoContainer img={screenshot.img}/>
            ))}
          </div>
        </div>
        <div className="col-sm-1">
          { idCurrent < 0 &&
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
