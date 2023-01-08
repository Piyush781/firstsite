import React,{useState} from 'react'

export default function TextForm(props) {

    const handleclick=()=>{
        console.log("Uppercase is clicked" +text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleloclick=()=>{
        console.log("lowercase is clicked" +text);
        let newtext=text.toLowerCase();
        setText(newtext);
    }    
    const capitallize=()=>{
       const arr=text.split(" ");
       for(var i=0;i<arr.length;i++)
       {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
       }
       const arr2=arr.join(" ");
       setText(arr2);
    }    
    const handlechange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handlecopy=()=>{
      console.log("I am copy");
      var text=document.getElementById("mytext");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const extraspace=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
    }
    // this is a important line to use the text in states
    const [text,setText]=useState('Enter the text'); 

    // text="sdjhfsdhjf" this is the wrong way to change the state


    // setText("sjfkhdsjkds"); // Correct way to chane the state
  return (
      <>
      
    <div className="container" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handlechange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="mytext" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleclick}>Convert to the uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to the Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={capitallize}>Capitalize  text</button>
    <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy</button>
    <button className="btn btn-primary mx-1 my-2" onClick={extraspace}>remove space</button>
    </div>
     <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} >
      <h1>Text summary is</h1>
      <p>
        {text.split(" ").join('').length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
     </>
  )
}
