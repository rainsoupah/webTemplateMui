import React from 'react'
import './CV.css'
import {profileData, experienceData} from './CVData'

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
      <li><a href="#section3">Courses</a></li>
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

const Experience = ({position_location, position_title, position_company, position_period, position_description}) => (
    <div className="row cv-exp-row">
      <div className="col-sm-4">
        <h3> {position_company} </h3>
        <div className="cv-exp-location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {position_location}
        </div>
        <h5> {position_period} </h5>
      </div>
      <div className="col-sm-7 col-sm-offset-1">
        <h4> {position_title}</h4>
        <p className="cv-exp-desc"> {position_description}</p>
      </div>
    </div>
)

const Experiences = ({section_id}) => (
  <div id={section_id}>
    <h2>Work Experiences</h2>
    <hr className="cv-exp-line"></hr>
    {
      experienceData.map((exp) => (
        <Experience position_title={exp.position}
          position_description={exp.description}
          position_period = {exp.time}
          position_location={exp.location}
          position_company={exp.company} />
      ))
    }
  </div>
)

const Main = () => (
  <div className="col-sm-9">
    <Profile section_id="section1"/>
    <Experiences section_id="section2"/>
    <Profile section_id="section3"/>
    <Profile section_id="section4"/>
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
