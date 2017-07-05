import React from 'react'
import './CV.css'

const SideBar = () => (
  <nav className="col-sm-3" id="myScrollspy">
    <ul className="nav nav-pills nav-stacked">
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <li><a href="#section3">Section 3</a></li>
    </ul>
  </nav>
)

const Section = ({section_id}) => (
  <div id={section_id}>
    <h1>{section_id}</h1>
    <p>
      Try to scroll this section and look at the navigation list while scrolling!Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.
    </p>
  </div>
)

const Main = () => (
  <div className="col-sm-9">
    <Section section_id="section1"/>
    <Section section_id="section2"/>
    <Section section_id="section3"/>
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
