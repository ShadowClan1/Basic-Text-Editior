import React from 'react'
import App from '../App'
export default function About(props) {

  
 
  return (
    <div className="container" ><div className="accordion" id="accordionExample" style={props.state}>
    <div className="accordion-item" style={props.state}>
      <h2 className="accordion-header" id="headingOne" style={props.state}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.state}>
          Owner 1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={props.state}>
        <div className="accordion-body">
          <code>Ritik kumar </code>
        </div>
      </div>
    </div>
    <div className="accordion-item" style={props.state}>
      <h2 className="accordion-header" id="headingTwo" style={props.state}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.state}>
          Contact id
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={props.state}>
        <div className="accordion-body">
          Ritiks786@gmail.com
        </div>
      </div>
    </div>
    <div className="accordion-item" style={props.state}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.state}>
          Contact number
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={props.state}>
          7889024783
        </div>
      </div>
    </div>
  </div>
  {/* <button id="btn5" onClick={btn5}></button> */}
  </div>
  )
}
