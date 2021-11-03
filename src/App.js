import React from "react";
import './App.css'

function App() {
  var values={
    firstName:"",
    lastName:"",
    email:"",
  };
  const handleSubmit=(event)=>{
    alert("Thanks for the feedback!!")
    event.preventDefault();
    console.log(values)
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
                  <input class="app-form-control" placeholder="FIRST NAME" type="text" />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="LAST NAME" type="text" />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="EMAIL" type="email" />
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
