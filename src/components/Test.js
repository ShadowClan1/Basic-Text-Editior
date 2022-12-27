import React, {useState}  from 'react'
import PropTypes from 'prop-types'
// import About from './About';
// import App from '../App';

// function btn1(){
  //   let a = document.getElementById('te').value;
  //   document.getElementById('te').value = a.toUpperCase();
  // }
  // function btn2(){
    //   let a = document.getElementById('te').value;
    //   document.getElementById('te').value = a.toUpperCase();
    // }
    // function btn3(){
      //   let a = document.getElementById('te').value;
//   document.getElementById('te').value = a;
// }
// function btn4(){
  //   let a = document.getElementById('te').value;
  //   document.getElementById('te').value = a.toLowerCase();
  //   console.log("converted to lowercase")
  
  // }
  export default function Test(props) {
    // setText("new text")
    const [text, setText] = useState('Text Here')
    function btn(){
      console.log('button pressed')
      let newtext = text.toUpperCase();
      setText(newtext)
      if(text.length > 0){

        props.showalert("text converted into uppercase","success","success")
      }
      else{
        props.showalert("Please enter text","danger","Failed")

      }
    }
    const btn1 = ()=>{
      console.log('user tried to lower the text')
      let newtext = text.toLowerCase();
      setText(newtext)
      
      if(text.length > 0){

        props.showalert("text converted into Lowercase","success","success")
      }
      else{
        props.showalert("Please enter text","danger","Failed")

      }
    
    }
    const btn2 = ()=>{
      let newText = ""
      setText(newText)
      
      if(text.length > 0){

        props.showalert("Text cleared","success","success")
      }
      else{
        props.showalert("Please enter text","danger","Failed")

      }
    }
      
    
    const btn3 = ()=>{
      document.getElementById('te').select()
      navigator.clipboard.writeText(document.getElementById('te').value)
      
      if(text.length > 0){

        props.showalert("Text copied to clipboard","success","success")
      }
      else{
        props.showalert("Please enter text","danger","Failed")

      }
    }

    
    const btn6 = ()=>{
      let l = document.getElementById('te').value
      let m = l.split(" ").filter((element)=>{ return element.length!==0 })
      setText(m.join(' '))
      
      if(text.length > 0){

        props.showalert("Removed Extra spaces","success","success")
      }
      else{
        props.showalert("to remove extra spaces","danger","Failed")

      }
    }
    
    const btn10=()=>{
       let i = document.getElementById('te').value
       let j = i.split(/\s+/)
       let text1 = ""
       
       for(let b = 0;b < j.length ; b++){ const x1 = j[b];

        const x = x1.toLowerCase()
        const y = x.charAt(0).toUpperCase() + x.slice(1);
        
          text1 += y + " "
      }
       
      setText(text1)
      if(text.length > 0){

        props.showalert("First letter is capitalized","success","success")
      }
      else{
        props.showalert("Please enter text","danger","Failed")

      
      }}
  
    

  const change = (event)=>{
    console.log('user tried to change')
    setText(event.target.value)
    
  }
  const clcktxt = ()=>{
   
    document.getElementById('te').select()
  }
  
  
  return (
    <div style={props.state}>
    <div >
<div className="mb-3">
 <h1>
   <label htmlFor="exampleFormControlTextarea1" className="form-label m-3">{props.heading}  </label> </h1>
  <textarea className="form-control" id="te" onChange={change} value={text} style={props.style} placeholder={text} onDoubleClick={clcktxt} rows="2"></textarea>
  <button className="btn btn-primary m-3" onClick={btn} >CAPITALIZE</button>
  <button className="btn btn-success m-3" onClick={btn1} >decapitalize </button>
  <button className="btn btn-success m-3" onClick={btn10} >Capitalize </button>
  <button className="btn btn-danger m-3" onClick={btn2} >Clear </button>
  <button className="btn btn-danger m-3" onClick={btn3} >Copy </button>
  <button className="btn btn-danger m-3" onClick={btn6} >Remove extra spaces </button>
  {/* <button className="btn btn-primary m-3" onClick={btn1} >Press</button>
  <button className="btn btn-primary m-3" onClick={btn2} >Press</button>
  <button className="btn btn-primary m-3" onClick={btn3} >Press</button>
  <button className="btn btn-primary m-3" onClick={btn4} >Press</button> */}
</div>
<div className="container">
<p className="m-3">{text.length} characters, {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} minutes required to read the words </p>
</div>
 <h1 className="container">Preview</h1>
 <p id="jo">{text.length>0?text:"Please Enter something in the above box"}</p>
 
<div>

</div>

    </div>
    
</div>
  )
}
Test.propTypes = {
    heading: PropTypes.string.isRequired
  }
