import React from 'react'

// import PropTypes from "prop-types";

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)

    }
  return (
    <div style={{height:40}}>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{height:40, padding:5}}>
  <strong>{capitalize(props.alert.show)}</strong>  {props.alert.msg} 
 
</div>
    </div>
  )
}
