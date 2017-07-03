import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// To DO:
//  1. UI: error message display too tight
//  3. check for super long emssages (> 500 characters) and send error msg

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

function SocialMediaComp() {
  return (
    <div>
    <div className="row content">
      <FloatingActionButton href="https://www.linkedin.com/in/yutongwanguwaterloo/" backgroundColor='#0077B5'
        style={styles.button}>
        <i className="fa fa-linkedin fa-3x" aria-hidden="true" style={{color: 'white'}}></i>
      </FloatingActionButton>

      <FloatingActionButton href="https://github.com/y629wang" backgroundColor='#ffffff'
        style={styles.button}>
        <i className="fa fa-github fa-3x" aria-hidden="true" style={{color: 'black'}}></i>
      </FloatingActionButton>

      <FloatingActionButton href="https://www.instagram.com/tongtongnii/?hl=en" backgroundColor='#ffffff'
        style={styles.button}>
        <i className="fa fa-instagram fa-3x" aria-hidden="true" style={{color: '#d14068'}}></i>
      </FloatingActionButton>

      <FloatingActionButton href="https://www.pinterest.com/YuT0ngT0ng/" backgroundColor='#d93630'
        style={styles.button}>
        <i className="fa fa-pinterest fa-3x" aria-hidden="true" style={{color: 'white'}}></i>
      </FloatingActionButton>

      <FloatingActionButton href="mailto:yutong.wang.94@gmail.com?subject=Feedback from Website" backgroundColor='white'
        style={styles.button}>
        <i className="fa fa-envelope-o fa-3x" aria-hidden="true" style={{color: '#ff5d49'}}></i>
      </FloatingActionButton>

    </div>

    <div className="row content">
      Comments
    </div>
    </div>
  )
}

const KeyWords=[
  "",
  "React javascript HTML Redux WTF FORMS material Bootstrap flask css3 python",
  "Responsive design inline styles Components Google Fonts are SoFun tags </>",
  "\" The best thing about a Boolean is even if you are wrong, you are only off by a bit",
  "\" In order to understand RECURSION, one must first understand recursion. ",
  "Thanks for Visiting my WEBsite <3",
];

// const array=["My", "Name","Is","Yutong"];

function KeyWordsComp() {
  const output = KeyWords.map((sentence,pid) => (
      <div key={pid}>
        {sentence.split(' ').map((item, index) => (
          <span key={Number(index+pid*10)}
            style={styles.fonts[Math.floor(Math.random() * 13)]}>
            { item }
            &nbsp;
          </span>
        ))}
        <br></br>
      </div>
    )
  );

  return(
    <div style={styles.keyComp}>
      {output}
    </div>
  )
}
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

      if (!newValue) {
          error_statement = "Please write something";
      } else {
        if (cur_id==1 && !validateEmail(newValue)) {
          error_statement = "Oops, please enter an actual email";
        } else if (cur_id==2 && !validateMsg(newValue)) {
          error_statement = "Hmm, that's a bit short";
        }
      }

      return this.handleStateChange(cur_id,error_statement,newValue);
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
        <div className="col-sm-6" ref="emailForm">
          <div id="form-messages"></div>
          <form id="ajax-contact" method="post" action="/my-app/public/mailer.php">
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
            <TextField id="2" hintText="" name="message" errorText={this.state.content[2].error} onChange={this.handleTextChange}/>
          </div>

          <div className="field">
            {this.renderSubmit()}
          </div>
        </form>
        </div>

        <div className="col-sm-6" ref="socialMedia">
          my social Media stuff
          <SocialMediaComp/>
        </div>
      </div>
      <div className="row content">
        <KeyWordsComp />
      </div>
    </div>
    );
  }
}

export default Contact;