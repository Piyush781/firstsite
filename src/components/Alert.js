import React from 'react'

 function Alert(props) {
  const capitalize=(word)=>{
    const lo=word.toLowerCase();
    return lo.charAt(0).toUpperCase()+lo.slice(1);
  }
  return (
      
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong> :{capitalize(props.alert.msg)}
       <button type="button" className="btn-close" data-bs-dismiss="alert"        aria-label="Close"></button>
        </div>
        
     )
     }

export default Alert
