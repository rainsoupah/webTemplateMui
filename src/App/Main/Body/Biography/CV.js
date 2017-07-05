import React from 'react'
import './CV.css'
import {profileData} from './CVData'

// const styles = {
//   cv-circle:{
//     maxWidth: '175px',
//     border: '#caeaef 10px solid',
//   },
// }

const SideBar = () => (
  <nav className="col-sm-3" id="myScrollspy">
    <ul className="nav nav-pills nav-stacked">
      <li><a href="#section1">Profile</a></li>
      <li><a href="#section2">Experiences</a></li>
      <li><a href="#section3">Skills</a></li>
    </ul>
  </nav>
)

const Traits = () => (
  <div className="row cv-traits">
    {
      profileData.traits.map((trait) => (
        <div className="col-sm-3">
          <h3> {trait.type} </h3>
          <h5> {trait.value} </h5>
        </div>
      ))
    }
  </div>
)

const Profile = ({section_id}) => (
  <div id={section_id}>
    <h1>Profile</h1>
    <h4>Something about me</h4>
    <hr></hr>
    <div className="row cv-profile"></div>
    <div className="row cv-imgAndTraits">
      <img src={profileData.img} className="img-responsive col-sm-3 img-circle cv-img"/>
      <div className="col-sm-9"><Traits/></div>
    </div>
  </div>
)

const Main = () => (
  <div className="col-sm-9">
    <Profile section_id="section1"/>
    <Profile section_id="section2"/>
    <Profile section_id="section3"/>
  </div>
)

class CV extends React.Component {
  render() {
    return (
        <div className="row">
          <SideBar/>
          <Main/>
        </div>
    )
  }
}

export default CV
