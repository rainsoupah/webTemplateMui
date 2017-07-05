import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery/Gallery';
import CV from './Biography/CV';
import Project from './Project/Project';
import Contact from './Contact/Contact';

// Note: Capitalized function name means components
// MAKE SURE TO CAPITALIZE!

// function Content1(props) {
//   return (
//     <div>
//     </div>
//   );
// }

// function Content2() {
//   return (
//     <div>
//       Button 2 content
//     </div>
//   );
// }

// function Content4() {
//   return (
//     <div>
//       Button 4 content
//     </div>
//   );
// }

class Body extends Component {
  constructor(props) {
    super(props);
  }

  // _handleScroll(event) {
  //   console.log("Scrolling!");
  // }
  //
  // componentDidMount() {
  //   const MyBody = ReactDOM.findDOMNode(this.refs.MAIN);
  //   MyBody.addEventListener('scroll', this._handleScroll.bind(this));
  // }

  render() {

    let content = null;
    const tab = this.props.tab;

    if (tab=="button1") {
      content = <Gallery tab="Current Tab"/>;
    } else if (tab=="button2") {
      content = <CV />;
    } else if (tab=="button3"){
      content = <Project />;
    } else if (tab=="button4"){
      content = <Contact />;
    } else {
      content = <div>Body.js: undefined button clicked</div>;
    }
      return (
        <div>
          {content}
        </div>
      );
    }
}

export default Body;
