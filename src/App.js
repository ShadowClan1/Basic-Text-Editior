// import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import Navbar from "./components/Navbar";
// import Img from "./components/Img";
import About from "./components/About";
import React, { useState } from "react";
// import PropTypes from "prop-types";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App(props) {
  const nu = {
    msg: "",
    type: "",
    show: "",
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      settextL("text-light");
      newstate(myStyle);
      pressed("Light Mode");
      showalert("Dark mode has been seleted", "success", "success");
      document.body.style.backgroundColor = "#002966";
      setstyle(style1);
    } else {
      setmode("light");
      settextL("text-dark");
      newstate(n);
      pressed("Dark mode");
      document.body.style.backgroundColor = "white";
      setstyle(m);
      showalert("Light mode has been seleted", "success", "success");
    }
  };

  let style1 = {
    //text box color
    backgroundColor: "#8d8e8f",
    color: "#fff",
  };
  let m = {}; //empty set for textbox color
  let myStyle = {
    //background color set
    color: "white",
    backgroundColor: "#002966",
  };
  let n = {
    //background color selector white
    color: "black",
    backgroundColor: "white",
  };
  const btn5 = () => {
    if (state.color === "white") {
    } else {
    }
  };
  const showalert = (message, type, mm) => {
    //to show alerts
    setalert({
      msg: message,
      type: type,
      show: mm,
    });
    setTimeout(() => {
      setalert(nu);
    }, 1000);
  };
  const [textL, settextL] = useState("text-dark"); // to change theme of navbar to change to change text color light
  const [alert, setalert] = useState(nu); //to set alert messages
  const [style, setstyle] = useState(m); //to set text box color
  const [press, pressed] = useState("Dark mode"); //to change text in nav bar
  const [state, newstate] = useState({ m }); //to change the color of background
  const [mode, setmode] = useState("light"); //to  set navbar theme
  const Time = () => {
    const time = new Date();
    let date = time.getDate();
    let ss = time.getSeconds();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let session = "";
    if (hh > 12) {
      hh -= 12;
      session += "PM";
    } else if (hh < 12) {
      session += "AM";
    }
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    let timee = hh + ":" + mm + ":" + ss + " " + session;
    document.getElementById("time").innerHTML = timee;
  };
  setInterval(() => {
    Time();
  }, 1000);

  return (
    <Router>
      <div style={state}>
        <Navbar
          title="JSK"
          about="Jai shree krishna"
          mode={mode}
          toggleMode={toggleMode}
          textL={textL}
          press={press}
          style={style}
          alert={alert}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Test
                  heading="Please write something"
                  btn5={btn5}
                  state={state}
                  style={style}
                  showalert={showalert}
                />
              }
            ></Route>
            <Route path="/about" element={<About state={state} />}></Route>
          </Routes>

          {/* Hare Krishna Hare Krishna krishna krishna hare hare hare rama hare rama
        rama rama hare hare */}
        </div>
      </div>
      <div id="time" style={state} className="absolute bottom-0 right-0"></div>
    </Router>
  );
}
