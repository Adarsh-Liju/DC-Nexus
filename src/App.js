import React from "react";
import "./App.css";
function App() {
  var values = {
    firstName: "",
    lastName: "",
    email: "",
    tel: 0,
    query: "",
  };
  function handleSubmit(event){
    event.preventDefault();
    values.firstName = document.getElementById("firstName").value;
    values.lastName = document.getElementById("lastName").value;
    values.email = document.getElementById("email").value;
    values.tel = document.getElementById("tel").value;
    values.query = document.getElementById("query").value;
    console.log(values);
  };
  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">CONTACT INFO :+91 8088229177</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="FIRST NAME"
                      type="text"
                      id="firstName"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="LAST NAME"
                      type="text"
                      id="lastName"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      type="tel"
                      id="tel"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="YOUR QUERY"
                      id="query"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button" onSubmit={handleSubmit}>
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
