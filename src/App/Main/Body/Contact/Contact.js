import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {socialMediaData} from './contactData'
import "./Contact.css"


const styles = {

  button: {
    margin: 10,
  },
  keyComp:{
    paddingLeft: '15px',
    paddingTop: '15px',
    maxWidth: 100,
  },
  fonts: [
    {fontFamily: 'Amatic SC, Regular', fontSize: '15px'},
    {fontFamily: 'Permanent Marker, Regular', fontSize: '18px'},
    {fontFamily: 'Petit Formal Script, Regular', fontSize: '22px'},
    {fontFamily: 'Short Stack, Regular',fontSize: '20px'},
    {fontFamily: 'Tillana, Regular',fontSize: '18px'},
    {fontFamily: 'Sunshiney, Regular',fontSize: '14px'},
    {fontFamily: 'Swanky and Moo Moo, Regular',fontSize: '17px'},
    {fontFamily: 'Bonbon, Regular',fontSize: '17px'},
    {fontFamily: 'Lakki Reddy, Regular',fontSize: '22px'},
    {fontFamily: 'Barrio, Regular',fontSize: '19px'},
    {fontFamily: 'Inconsolata, Monospace',fontSize: '26px'},
    {fontFamily: 'Gloria Hallelujah, Regular',fontSize: '28px'},
    {fontFamily: 'Keania One, Regular',fontSize: '30px'},
    {fontFamily: 'Orbitron, Sans-serif',fontSize: '17px'},
  ],

};

function validateEmail(value) {
  // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value); //tests for a match in value
}

function validateMsg(value) {
  // check length of message
  if (value.length < 10) {
    return false;
  } else {
    return true; //tests for a match in value
  }
}

const SocialMedia = ({icon, mlink, name, color, background}) => (
  <a href={mlink}>
  <div className="col-sm-6 contact-media-box" style={background}>
      <i className={icon} aria-hidden="true" style={color}></i>
  </div>
  </a>
)
function SocialMediaComp() {
  return (
    <div>
      <div className="row">
        {socialMediaData.map((media, i) => {
          if (i < 2) {
            return (
              <SocialMedia
                icon={media.icon}
                mlink={media.link}
                name={media.name}
                color={media.color}
                background={media.background}
                />
            )
          }
        })}
      </div>
      <div className="row">
        {socialMediaData.map((media, i) => {
          if (i >= 2) {
            return (
              <SocialMedia
                icon={media.icon}
                mlink={media.link}
                name={media.name}
                color={media.color}
                background={media.background}
                />
            )
          }
        })}
      </div>
    </div>
  )
}

// function KeyWordsComp() {
//   const output = KeyWords.map((sentence,pid) => (
//       <div key={pid}>
//         {sentence.split(' ').map((item, index) => (
//           <span key={Number(index+pid*10)}
//             style={styles.fonts[Math.floor(Math.random() * 13)]}>
//             { item }
//             &nbsp;
//           </span>
//         ))}
//         <br></br>
//       </div>
//     )
//   );
//
//   return(
//     <div style={styles.keyComp}>
//       {output}
//     </div>
//   )
// }

class Contact extends React.Component {
  constructor(props) {
    super(props);
    // states
    this.state={
      content: [
        {
          error:"",
          value:"",
        },
        {
          error:"",
          value:"",
        },
        {
          error:"",
          value:"",
        },
      ],

      pass: false,
    };
  }

  componentDidMount() {
    document.getElementById('0').addEventListener('blur', this.handleBlur);
    document.getElementById('1').addEventListener('blur', this.handleBlur);
    document.getElementById('2').addEventListener('blur', this.handleBlur);
  }

  componentWillUnmountMount() {
    document.getElementById('0').removeEventListener('blur', this.handleBlur);
    document.getElementById('1').removeEventListener('blur', this.handleBlur);
    document.getElementById('2').removeEventListener('blur', this.handleBlur);
  }

  handleStateChange = (cur_id, error_statement, value) => {
    let copy = Object.assign({}, this.state);
    copy.content = copy.content.slice();
    copy.content[cur_id].error = error_statement;
    copy.content[cur_id].value = value;
    this.setState(copy);
  }

  handleBlur = (event: object) => {
    if (!event.target.value) {
      const cur_id = Number(event.target.id);
      const error_statement = "Please write something";
      return this.handleStateChange(cur_id, error_statement,event.target.value);
    }
    console.log(event.target.value);
  }

  handleTextChange = (event: object, newValue: string) => {

      let error_statement = "";
      const cur_id = Number(event.target.id); //convert to number

      if (!event.target.value) {
          error_statement = "Please write something";
      } else {
        if (cur_id==1 && !validateEmail(newValue)) {
          error_statement = "Oops, please enter an actual email";
        } else if (cur_id==2 && !validateMsg(event.target.value)) {
          error_statement = "Hmm, that's a bit short";
        }
      }

      return this.handleStateChange(cur_id,error_statement,event.target.value);
  }

  renderSubmit() {
    const {content} = this.state;

    if (content[0].error || content[1].error || content[2].error) {
        // if one of the erros is not empty:
        this.state.pass = false;
    } else if (!content[0].value || !content[1].value || !content[2].value) {
      // some fields are empty, but errors are all empty
      this.state.pass = false;
    } else {
      this.state.pass = true;
    }

    return (
      <RaisedButton disabled={!this.state.pass} primary={true} fullWidth={true} type="submit">
        Send
      </RaisedButton>
    )
  }

  render() {

    return (
      <div ref="contact page">
      <div className="row content">
        <div className="col-sm-5" ref="emailForm">
          <div id="form-messages"></div>
          <form id="ajax-contact" method="post" action="/handleForm">
            <div className="field">
              <label htmlFor="name">Your Name:</label>
              <TextField id="0" hintText="" name="sender" errorText={this.state.content[0].error} onChange={this.handleTextChange}/>
            </div>

            <div className="field">
              <label htmlFor="email">Your Email:</label>
              <TextField id="1" hintText="" name="senderAddress" errorText={this.state.content[1].error} onChange={this.handleTextChange}/>
            </div>

          <div className="field">
            <label htmlFor="message">Your Message:</label>
            <span>{this.state.content[2].error}</span>
            <textarea className="form-control contact-msg-box" rows="5" id="2" name="message"
              onChange={this.handleTextChange}
              ></textarea>
          </div>


          <div className="field">
            {this.renderSubmit()}
          </div>
        </form>
        </div>

        <div className="col-sm-7" ref="socialMedia">
          <SocialMediaComp/>
        </div>
      </div>

    </div>
    );
  }
}

// <TextField id="2" hintText="" name="message" errorText={this.state.content[2].error} onChange={this.handleTextChange}/>
// <div className="row content">
//   <KeyWordsComp />
// </div>
export default Contact;
