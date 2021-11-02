import React, { useState } from "react";
import './App.css'
function App() {
  const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
  });
  const handleSubmit=(event)=>{
    alert("Thanks for the feedback!!")
    event.preventDefault();
  }
  const handleFirstNameInputChange=(event)=>{
    setValues({...values,firstName:event.target.value})
  }
  const handleLastNameInputChange=(event)=>{
    setValues({...values,lastName:event.target.value})
  }
  const handleEmailInputChange=(event)=>{
    setValues({...values,email:event.target.value})
  }


    return(
      <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div class="app-contact">CONTACT INFO :+91 8088229177</div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="FIRST NAME" type="text" onChange={handleFirstNameInputChange}/>
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="LAST NAME" type="text" onChange={handleLastNameInputChange}/>
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="EMAIL" type="email" onChange={handleEmailInputChange}/>
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="CONTACT NO" type="tel"/>
                </div>
                <div class="app-form-group message">
                  <input class="app-form-control" placeholder="YOUR QUERY"/>
                </div>
                <div class="app-form-group buttons">
                  <button class="app-form-button">CANCEL</button>
                  <button class="app-form-button" onSubmit={handleSubmit}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
       
  );
}

export default App;
