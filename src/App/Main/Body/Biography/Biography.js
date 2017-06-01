import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import './bio.css';

// To Do:
//  1. change layout rows of 2 (alternating pattern)
//  2. add picture frame, content to Read More section
//  3. optional: google api for location
//  4. css before and after &:before what does it do?
//  5. Future improvements: smooth transitions/animations: https://facebook.github.io/react/docs/animation.html

const styles = {
  main: {
    // maxWidth: 380,
    // maxHeight: 300,
    margin: 'auto',
    // overflowY: 'auto',
  },
  iconHolderLg: {
    height:100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  iconHolderSm: {
    height: 60,
    width: 60,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  iconContainer: {
    height: 90,
  },
  button: {

  },
  iconImg: {
    height: 50,
    width: 50,
  },
  leftPane: {
    title: {
      fontFamily: 'Tillana, Regular',
      fontSize: '16px',
      color:'#2b3438',
    },
    subtitle: {
      fontSize: '12px',
      color: '#92a6af',
      textAlign: 'right',
    },
    body: {
      color:'#2b3438',
      // fontSize:'14px',
      margin:'0 0 0 4em',
    },
    button: {},
  },
  rightPane: {
    photo:{
      maxWidth: '100%',
      maxHeight: '135px',
    },
    smPhoto:{
      maxWidth: 100,
      maxHeight: 100,
    }
  },
};

const bioData=[
  {
    id: 0,
    date: 'April, 2017',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    company: [
      {
        name: 'Lorem ipsum dolor',
        iconSrc: 'https://image.flaticon.com/icons/svg/46/46707.svg',
        pictureSrc: 'https://uwaterloo.ca/find-out-more/sites/ca.find-out-more/files/uploads/images/trio-ringroad-qnc-slc-fall.jpg',
        location: 'amet, consectetur',
      }
    ],
    bullets :[
      "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur",
    ],
    description: 'Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore.',
    imgOfMe: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANSAAAAJGUzZWYwMDA1LTBhOWMtNGZjNS04OTllLWI2NzA1NzBkZjBiMg.png',
  },
  {
    id: 1,
    date: 'Lorem sit',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    company: [
      {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        iconSrc: 'http://www.customsoftwaredevelopment-incllc.biz/images/software-developer.svg',
        pictureSrc: 'https://www.openspace.org/sites/default/files/styles/750x308/public/hdr_photo_contest_ericlew_0.jpg?itok=gZhrx6GE',
        location: 'Lorem amet, consectetur',
      }
    ],
    bullets :[
      "o inventore veritatis et quasi architecto beatae vitae dicta sunt expl",
      "o inventore veritatiso inventore veritatis et quasi architecto beatae vitae dicta sunt expl vitae dicta sunt expl",
    ],
    description: 'Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting. ',
    imgOfMe: 'https://image.flaticon.com/icons/svg/46/46707.svg',
  },
  {
    id: 2,
    date: 'Lorem sit',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    company: [
      {
        name: 'Lorem ipsum dolor sit amet, consectetur',
        iconSrc: 'https://image.flaticon.com/icons/svg/46/46707.svg',
        pictureSrc: 'https://drscdn.500px.org/photo/89215855/q%3D80_h%3D300/090b42bed0688ec3f58df6fb36b8d6fb',
        location: 'Lorem amet, consectetur',
      }
    ],
    bullets :[
      "o inventore veritatis et quasi architecto beatae vitae dicta sunt expl",
      "o inventore veritatiso inventore veritatis et quasi architecto beatae vitae dicta sunt expl vitae dicta sunt expl",
    ],
    description: 'Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting. ',
    imgOfMe: 'https://image.flaticon.com/icons/svg/46/46707.svg',
  },
];

class Biography extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          height:1,
          stepIndex:0,
          visibility: [
            {
              button: true,
              content: false,
            },
            {
              button: true,
              content: false,
            },
            {
              button: true,
              content: false,
            },
            {
              button: true,
              content: false,
            },
          ],
        };
  }

  handleExpandCollapse = (id, action) => {
    // immutable state change handle
    let copy = Object.assign({}, this.state);
    copy.visibility = copy.visibility.slice();
    copy.visibility[id] = Object.assign({}, copy.visibility[id]);

    if (action == "expand") {
      copy.visibility[id].button = false;
      copy.visibility[id].content = true;
    } else if (action =="collapse") {
      copy.visibility[id].button = true;
      copy.visibility[id].content = false;
    } else {
      console.log("handleExpandCollapse-action is invalid");
    }
    this.setState(copy);

    // console.log(bioData[id].visible.content);
  };

  componentDidMount () {
    // this.refs.stepper.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // complete after finishing final UI, since scrollbar changes based on content size
  handleScroll = (event) => {
    // let scrollTop = event.srcElement.body.scrollTop;
    let scrollTop = window.pageYOffset;
    const {stepIndex, scrollOffset, prevYLocation} = this.state;
    // console.log(window.pageYOffset);
    let screenHeight = 316, numSteps = 4; //fullsize chrome browser
    let itemNumber = Math.floor(scrollTop/(screenHeight/numSteps));

    if (itemNumber >= 0 && itemNumber <= numSteps-1) {
        this.setState({stepIndex: itemNumber});
    } else {
      // console.log("itemNumber is out of range!");
    }
    // const windowOffset = window.pageYOffset - prevYLocation;
    // console.log("current  "+window.pageYOffset+" scrollTop "+ event);
    // console.log(event.srcElement.activeElement.scrollHeight);
    //
    // if (scrollOffset >= 20) {
    //   // downward scroll
    //   if (stepIndex < 3) {
    //     this.setState({
    //       stepIndex: stepIndex + 1,
    //       scrollOffset: 0,
    //     })
    //   }
    // } else if (scrollOffset <= -10) {
    //   //upward scroll
    //   if (stepIndex > 0) {
    //     this.setState({
    //       stepIndex: stepIndex - 1,
    //       scrollOffset: 0,
    //     })
    //   }
    // }
    //
    // this.setState({ prevYLocation: window.pageYOffset});
  }

// being called n times (n is number of items in bioData)
  renderDetails(id) {
    // console.log(bioData);
    return (
      <div>
        {
          this.state.visibility[id].content &&
          (<div>
            <p>
              More Info of {bioData[id].company[0].location} FOund HERE!!!!!
            </p>
            <FlatButton
              label="Read Less..."
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              onTouchTap={this.handleExpandCollapse.bind(this,id,"collapse")}
              style={styles.button}
            />
            </div>
          )
        }
        {
          this.state.visibility[id].button &&
          <FlatButton
            label="Read More..."
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleExpandCollapse.bind(this,id,"expand")}
            style={styles.button}
          />
        }
      </div>
    )
  }

  renderIcon(size, imgsrc) {
    if (size == "large") {
      return (
          <img style={styles.iconImg} src={imgsrc}/>
      )
    } else if (size=="small") {
      return (
          <img style={styles.iconImg} src={imgsrc}/>
      )
    } else {
      console.log("renderIcon: size not defined");
    }
  }

  renderLeftPane(id) { //id is id of the current data point
    let size="small";
    if (id === this.state.stepIndex) {
      size="large";
    }

    return(
      <article className="box">
					<header>
						<div style={styles.leftPane.title}>
              {bioData[id].title}
            </div>
            <div style={styles.leftPane.subtitle}>
              Location: {bioData[id].company[0].name} | {bioData[id].company[0].location}
            </div>
					</header>
					<a href="#" className="image left">
            {this.renderIcon("large", bioData[id].company[0].iconSrc)}
					</a>
          <ul style={styles.leftPane.body}>
            {bioData[id].bullets.map((item,index) => (<li key={index}>{item}</li>))}
            {
                this.state.visibility[id].button &&
                <li>
                  <a href="#" onClick={this.handleExpandCollapse.bind(this,id,"expand")}>
                    Read More...
                  </a>
                </li>
            }
          </ul>

			</article>
    )
  }

  renderRightPane(id) {
    const {visibility} = this.state;

    if (visibility[id].button) {
      return (
        <div className="boxRight">
          <img className="img-rounded" style={styles.rightPane.photo} src={bioData[id].company[0].pictureSrc} alt="Graduated"></img>
        </div>

      )
    } else {
      return(
        <article className="boxRight" >
            <a href="#" style={{float:'right'}}>
              <div>
                <img src={bioData[id].imgOfMe} style={styles.rightPane.smPhoto} alt="some alt"></img>
              </div>
            </a>
            <p>
              {bioData[id].description}
              {
                visibility[id].content &&
                <a href="#" onClick={this.handleExpandCollapse.bind(this,id,"collapse")}>
                  collapse
                </a>
              }
            </p>

        </article>
      )
    }
  }

  render() {

    const experiences = bioData.map((item, id) => (
      <div className="row content" key={id}>
        <div className="col-sm-6" > {id%2 == 0 ? this.renderLeftPane(id) : this.renderRightPane(id)}</div>
        <div className="col-sm-6" > {id%2 == 0 ? this.renderRightPane(id) : this.renderLeftPane(id)}</div>
      </div>
    ))

    return(
      <div>
          <div className="col-sm-12 text-left"></div>
          {experiences}
      </div>

    );
  }
}

export default Biography;
