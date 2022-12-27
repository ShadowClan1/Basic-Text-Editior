import React, {useState} from "react";
import PropTypes from "prop-types";
// import About from "./About";
import { Link } from "react-router-dom";
export default function Navbar(props) {
 const [search, setsearch] = useState("Search")
  const change =(event)=> {
setsearch(event.target.value)
}
const fun1 = ()=>{
setstyl({borderRadius:10,backgroundColor:"black",
color:"white"
})
setInterval(() => {
  setstyl(em)
}, 1000);
}
const em = {borederRadius:10}
const [styl, setstyl] = useState(em)

  
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  style={styl}
                 onMouseOver={fun1}
                >
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input id="srch"
                className="form-control me-2"
                type="search"                placeholder="Search"
                aria-label="Search"
                style={{backgroundColor: (props.mode === "dark")?'#8d8e8f':'#fff', color: (props.mode ==="dark")?'#fff':'black'}}
                value={search}
                onChange={change}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            
          </div>
        </div>
        <div className={`form-check form-switch ${props.textL} `}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                
                
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{fontSize:12}}>
                {props.press}
              </label>
            </div>
      </nav>
      <div className="container">
         
      </div>{" "}
      
    </>
  );
}
Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
Navbar.defaultProps = {
  title: "Stranger",
};
